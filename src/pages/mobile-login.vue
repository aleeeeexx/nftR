<template>
  <div class="mobile-login">
    <div class="input-box van-hairline--bottom">
      <div class="label">手机号</div>
      <van-field v-model.trim="phone" label="" type="tel" placeholder="请输入" :maxlength="11" />
    </div>
    <div class="input-box van-hairline--bottom">
      <div class="label">验证码</div>
      <div class="code" :class="{ active: !codeSent }" @click="sendCode">
        {{ codeSent ? seconds + 's' : '获取验证码' }}
      </div>
      <van-field v-model.trim="code" label="" type="tel" placeholder="请输入" :maxlength="6" />
    </div>
    <div class="btn-wrap">
      <van-button
        round
        :color="code.length < 4 ? '#E5E5EA' : '#7AB439'"
        :class="code.length < 4 ? 'disabled' : ''"
        @click="login"
        >登录/注册</van-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, ref } from 'vue'
// import { useRoute, useRouter } from 'vue-router'
import { getVerifyCode, loginByVerifyCode } from '@/api/user'
import { setStorage } from '@/utils/pulin-login'
import { Toast } from 'vant'
// const router = useRouter()
// const route = useRoute()
// 手机号
const phone = ref('18289755297')
// 输入的验证码
const code = ref('123')
// 获取验证码
// 是否发送
const codeSent = ref(false)
// 倒计时秒数
const seconds = ref(60)
// 点击发送
const sendCode = async () => {
  // 已发送不操作
  if (codeSent.value) return
  const res = await getVerifyCode(phone.value)
  console.log(res)
  code.value = res.message
  Toast('验证码已发送')
  codeSent.value = true
  countDown()
}
// 倒计时
let timer: number = 0
const countDown = () => {
  seconds.value = 60
  timer = setInterval(() => {
    if (seconds.value > 0) seconds.value--
    else {
      clearInterval(timer)
      timer = 0
      codeSent.value = false
    }
  }, 1000)
}

// 登录/注册
const login = async () => {
  const userInfo = await loginByVerifyCode({
    phone: phone.value,
    verifyCode: code.value
    // userId: localStorage.getItem('userId')
    // externalUserId: localStorage.getItem('externalUserId')
  })
  console.log(userInfo)
  setStorage(userInfo)
  console.log(localStorage.getItem('access_token'), 'getItem')
  // console.log(decodeURIComponent(route.query.redirect as string))
  // const path = decodeURIComponent(route.query.redirect as string)
  // router.replace(path + (path.includes('?') ? '&' : '?') + 'isPulin=1')
}
// 页面卸载，清除定时器
onBeforeUnmount(() => {
  timer && clearInterval(timer)
})
</script>

<style lang="scss" scoped>
.mobile-login {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}
.input-box {
  box-sizing: border-box;
  // height: 72px;
  margin-left: 20px;
  padding: 16px 0;
  position: relative;
  .label {
    font-size: 14px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 8px;
  }
  .value,
  .van-cell {
    font-size: 20px;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.85);
    padding: 0;
  }
  .code {
    width: 102px;
    height: 28px;
    line-height: 28px;
    border: 0.5px solid #e5e5ea;
    border-radius: 50px;
    text-align: center;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 16px;
    right: 20px;
    z-index: 2;
    &.active {
      border-color: #7ab439;
      color: #7ab439;
    }
  }
}
.btn-wrap {
  padding: 20px;
  .van-button {
    width: 100%;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    &.disabled :deep(.van-button__text) {
      color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
