# 最新的Dockerfile和docker-entrypoint.sh: https://git.vankeservice.com/renz-public/project-template/
# deps stage
FROM node:lts-alpine AS deps

WORKDIR /app

COPY package*.json .
COPY yarn.lock .

RUN npm config set unsafe-perm true && npm config set registry https://npm.bu6.io && npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/ 
RUN yarn 
RUN yarn list
# builder stage
FROM deps AS builder

ARG ENV=test
ARG LOG='发版的人很懒, 什么都没说'
ARG VERSION=''
ARG TIME=''

COPY . .
RUN npm run build:$ENV

# runtime stage
FROM nginx:stable-alpine AS runtime

RUN adduser -D -H -s "/bin/sh" -u 65532 nonroot

ENV TZ=Asia/Shanghai \
    WORKDIR=/usr/share/nginx/html

WORKDIR ${WORKDIR}

RUN set -ex \
    && sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories \
    && apk update --no-cache \
    && apk add --no-cache ca-certificates tzdata su-exec curl bash \
    && alias gosu="su-exec" \
    && rm -rf /var/cache/apk/* \
    && chown nonroot:nonroot ${WORKDIR}

ENTRYPOINT ["./docker-entrypoint.sh"]

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

COPY docker-entrypoint.sh .
COPY default.conf /etc/nginx/conf.d/

# 从builder stage拷贝编译后的文件， 检查目录
COPY --chown=nonroot:nonroot --from=builder /app/dist .