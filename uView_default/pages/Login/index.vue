<template>
	<view class="contain">
        <image class="logo" src="/static/logo.jpg"></image>
        <p class="remark">省钱就来一起拼</p>
		<u-button type="success" @click="loginClick" class="custom-style" ripple-bg-color="#909399">
			<u-icon name='weixin-fill' color="#ffffff" size="40" class="loginIcon"></u-icon>
			微信快捷登入
		</u-button>
		<p class="des">微信授权登入后可以享受拼单,低价购物服务</p>
	</view>

</template>


<script>
import {LoginApi} from '../../api/login.js'
let LoginService = new LoginApi();
export default {
  data() 
  {
    return {
		LoginForm:{
			code:'',
			encryptedData:'',
			iv:''
		}


	}		 
  },
  methods: {
   loginClick() {
   var that = this
   wx.getSetting({
   success(res) {
    if (res.authSetting['scope.userInfo']) {
      wx.authorize({
        scope: 'scope.userInfo',
        success () {
          wx.getUserInfo({
            success: function(res) 
            {
				that.LoginForm.encryptedData = res.encryptedData,
				that.LoginForm.iv = res.iv,
				wx.login({
					success (res) {
						if(res.code) {
							that.LoginForm.code = res.code
							LoginService.Login(that.LoginForm).then(res => {
					          uni.setStorageSync('UserInfo', {
								  time:Date.now(),
								  data:res.ResultData.User,
								  token:res.ResultData.token
							  });
					          uni.switchTab({
						        url:'../main/index'
					        })
				            })
						}
					}
				})
          console.log(res)
            }
        })
        }
      })
    }
  }
})
		  }
		}
	}
</script>

<style lang="scss">
	.contain {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
	}
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
        border-radius:10px
	}
    .remark {
        margin-top: -40rpx;
        color: #b8b4b4;
    }
	.loginIcon {
		position: absolute;
		top: 30%;
		left: 28%;
	}

	.custom-style {
		position: absolute;
		top: 50%;
		left: 10%;
		width: 600rpx;
		color: blue($color: #aaff00);
	}

	.des {
		position: absolute;
		top: 65%;
		left: 15%;
        
	}

	.UserDes {
		position: absolute;
		top: 85%;
		left: 33%;
		color: #e2e2e2;
        align-items: center;
	}
</style>
