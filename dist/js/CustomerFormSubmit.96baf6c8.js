(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CustomerFormSubmit"],{6438:function(e,t,r){"use strict";r("f346")},"734c":function(e,t,r){"use strict";r.r(t);var n=r("9ab4"),c=r("7a23"),u=r("6c02"),o=r("626a"),i=r("ebef");Object(c["pushScopeId"])("data-v-696e6f30");var a={class:"form-field-grey"},s={key:0};Object(c["popScopeId"])();var d=Object(c["defineComponent"])({setup:function(e){var t=this,r=Object(u["d"])(),d=Object(u["e"])(),l=Object(c["ref"])(""),b=r.query.pageType;document.title={addForwardRecord:"添加跟进记录",closeForwardRecord:"结束跟进原因",valid:"填写无效原因"}[b];var f=JSON.parse(r.query.customerId),v=!1,O=function(){return Object(n["b"])(t,void 0,void 0,(function(){return Object(n["c"])(this,(function(e){switch(e.label){case 0:return l.value?[4,Object(i["c"])({type:{addForwardRecord:2,closeForwardRecord:4,valid:1}[b],customerId:f,content:l.value,valid:"valid"===b?0:void 0,referralId:r.query.referralId})]:[3,2];case 1:e.sent(),o["a"].success("操作成功"),"valid"!==b&&(v=!0),setTimeout((function(){d.go(-1)}),2e3),e.label=2;case 2:return[2]}}))}))},j=document.getElementById("app");return j&&j.setAttribute("style","background:#ffffff"),Object(u["c"])((function(e){j&&j.setAttribute("style","background:#f9f9f9"),e.params.change=v?"follow":"house"})),function(e,t){var r=Object(c["resolveComponent"])("van-field");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("div",a,["closeForwardRecord"===Object(c["unref"])(b)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",s," 提交结束跟进原因后，将由中央客服/操盘手复核你提交的的关闭线索 ")):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(r,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.value=e}),modelModifiers:{trim:!0},rows:"2",autosize:"",type:"textarea",maxlength:"50",placeholder:"请输入","show-word-limit":"",autofocus:""},null,8,["modelValue"])]),Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["submit-btn success",{success:l.value,error:!l.value}]),onClick:O}," 提交 ",2)],64)}}});r("6438");d.__scopeId="data-v-696e6f30";t["default"]=d},ebef:function(e,t,r){"use strict";r.d(t,"k",(function(){return o})),r.d(t,"s",(function(){return i})),r.d(t,"z",(function(){return a})),r.d(t,"x",(function(){return s})),r.d(t,"f",(function(){return d})),r.d(t,"y",(function(){return l})),r.d(t,"g",(function(){return b})),r.d(t,"m",(function(){return f})),r.d(t,"i",(function(){return v})),r.d(t,"p",(function(){return O})),r.d(t,"n",(function(){return j})),r.d(t,"l",(function(){return h})),r.d(t,"o",(function(){return m})),r.d(t,"B",(function(){return p})),r.d(t,"u",(function(){return w})),r.d(t,"c",(function(){return g})),r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return I})),r.d(t,"q",(function(){return k})),r.d(t,"v",(function(){return C})),r.d(t,"A",(function(){return F})),r.d(t,"j",(function(){return R})),r.d(t,"r",(function(){return E})),r.d(t,"C",(function(){return V})),r.d(t,"d",(function(){return x})),r.d(t,"w",(function(){return B})),r.d(t,"t",(function(){return N})),r.d(t,"e",(function(){return S})),r.d(t,"h",(function(){return T}));var n=r("9ab4"),c=r("b32d"),u=r("4763"),o=function(){return Object(n["b"])(void 0,void 0,void 0,(function(){var e;return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/resource/line/cityWithProvince",method:"get"})];case 1:return e=t.sent(),[2,e.result]}}))}))},i=function(){return Object(n["b"])(void 0,void 0,void 0,(function(){var e;return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/api/commonConfig/list/configOption/referral",method:"get"})];case 1:return e=t.sent(),[2,e.result]}}))}))},a=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/referral/tag/saveReferralTag",method:"post",data:e})];case 1:return[2,t.sent()]}}))}))},s=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/referral/tag/saveFollowLabel",method:"post",data:e})];case 1:return[2,t.sent()]}}))}))},d=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){var t;return Object(n["c"])(this,(function(r){switch(r.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/customer/checkCustomerExist",method:"post",data:e})];case 1:return t=r.sent(),[2,t.result]}}))}))},l=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/customer/saveHouseMember",method:"post",data:e})];case 1:return[2,t.sent()]}}))}))},b=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/customer/deleteHouseMember",method:"get",params:e})];case 1:return[2,t.sent()]}}))}))},f=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){var t;return Object(n["c"])(this,(function(r){switch(r.label){case 0:return[4,Object(c["a"])({url:u["a"]+"/admin/order/customerSystem/list",method:"get",params:e})];case 1:return t=r.sent(),[2,t.result]}}))}))},v=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){var t;return Object(n["c"])(this,(function(r){switch(r.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/referral/pageOtherBindOrder",method:"get",params:e})];case 1:return t=r.sent(),[2,t.result]}}))}))},O=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){var t;return Object(n["c"])(this,(function(r){switch(r.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/api/referral/customerReferralOrderPage",method:"get",params:{customerId:e,pageSize:100,page:1}})];case 1:return t=r.sent(),[2,t.result]}}))}))},j=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){var t,r;return Object(n["c"])(this,(function(n){switch(n.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/api/customer/page",method:"get",params:e})];case 1:return t=n.sent(),r=null===t||void 0===t?void 0:t.result,[2,r]}}))}))},h=function(e,t){return Object(n["b"])(void 0,void 0,void 0,(function(){var r,o;return Object(n["c"])(this,(function(n){switch(n.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/customer/"+e,method:"get",params:{flag:t}})];case 1:return r=n.sent(),o=null===r||void 0===r?void 0:r.result,[2,o]}}))}))},m=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){var t,r;return Object(n["c"])(this,(function(n){switch(n.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/referral/"+e,method:"get"})];case 1:return t=n.sent(),r=null===t||void 0===t?void 0:t.result,[2,r]}}))}))},p=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/customer",method:"put",data:e})];case 1:return[2,t.sent()]}}))}))},w=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){var t,r;return Object(n["c"])(this,(function(n){switch(n.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/referralFollowRecord/"+e,method:"get"})];case 1:return t=n.sent(),r=null===t||void 0===t?void 0:t.result,[2,r]}}))}))},g=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/referral",method:"put",data:e})];case 1:return[2,t.sent()]}}))}))},y=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/referral/agreeFollowOrNot",method:"post",data:e})];case 1:return[2,t.sent()]}}))}))},I=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/referral/assignOrReassign",method:"put",data:e})];case 1:return[2,t.sent()]}}))}))},k=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){var t;return Object(n["c"])(this,(function(r){switch(r.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/qyWeixin/getExternalUser",method:"get",params:{externalUserId:e}})];case 1:return t=r.sent(),[2,t.result]}}))}))},C=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){var t;return Object(n["c"])(this,(function(r){switch(r.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/api/visitor/getVisitor",method:"get",params:{externalUserId:e}})];case 1:return t=r.sent(),[2,t.result]}}))}))},F=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/api/visitor/saveVisitor",method:"post",data:e})];case 1:return[2,t.sent()]}}))}))},R=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){var t;return Object(n["c"])(this,(function(r){switch(r.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/api/visitor/getReferralList",method:"get",params:{mobile:e}})];case 1:return t=r.sent(),[2,t.result]}}))}))},E=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){var t;return Object(n["c"])(this,(function(r){switch(r.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/api/visitor/getHouseList",method:"get",params:{mobile:e}})];case 1:return t=r.sent(),[2,t.result]}}))}))},V=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/api/referral/updateIntentionType",method:"post",data:e})];case 1:return[2,t.sent()]}}))}))},x=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/referral/terminateApprove",method:"post",data:e})];case 1:return[2,t.sent()]}}))}))},B=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){return Object(n["c"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/api/referral/bindOrder",method:"post",data:e})];case 1:return[2,t.sent()]}}))}))},N=function(e,t){return Object(n["b"])(void 0,void 0,void 0,(function(){var r;return Object(n["c"])(this,(function(n){switch(n.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/api/referral/assign/pa/list/"+e,method:"get",params:t})];case 1:return r=n.sent(),[2,r.result]}}))}))},S=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){var t,r;return Object(n["c"])(this,(function(n){switch(n.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/api/referral/counts/canFollowCounts",method:"GET",params:{currentDeliveryPlanId:e}})];case 1:return t=n.sent(),r=null===t||void 0===t?void 0:t.result,[2,r]}}))}))},T=function(e){return Object(n["b"])(void 0,void 0,void 0,(function(){var t,r;return Object(n["c"])(this,(function(n){switch(n.label){case 0:return[4,Object(c["a"])({url:u["b"]+"/api/referral/counts/followingCounts",method:"GET",params:{currentDeliveryPlanId:e}})];case 1:return t=n.sent(),r=null===t||void 0===t?void 0:t.result,[2,r]}}))}))}},f346:function(e,t,r){}}]);
//# sourceMappingURL=CustomerFormSubmit.96baf6c8.js.map