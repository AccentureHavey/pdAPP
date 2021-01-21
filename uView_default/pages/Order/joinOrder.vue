<template>
<view>
    <image class="banner" src="/static/banner.png">
    <view class="wrap">
   <u-swiper :list="list"></u-swiper>
</view>
    <u-form :model="form" ref="uForm">
        <u-form-item label="店铺"><u-input v-model="form.shopName" /></u-form-item>
        <u-form-item label="优惠类型" label-width="150rpx"><u-input v-model="form.type" :disabled='true'/></u-form-item>
        <u-form-item label="差额" label-width="150rpx"><u-input v-model="form.des" :disabled='true'/></u-form-item>
        <u-form-item label="描述" label-width="150rpx"><u-input v-model="form.des" :disabled='true'/></u-form-item>
        <u-form-item label="有效时间" label-width="150rpx"><u-input v-model="form.vaildTime" :disabled='true'/></u-form-item>
        <u-form-item label="状态" label-width="150rpx"><u-button type='warning' size='mini'>等待拼单中</u-button></u-form-item>
    </u-form>
    <u-popup v-model="JoinShow" mode="center" border-radius="14" width="500rpx" height="140px">
			<view class="notice">已提醒对方，对方确认后，您将收到对方联系方式！</view>
            <u-button type='success' size='medium' class="okButton" @click="OkClick">了解</u-button>
	</u-popup>
<u-button type='success' size='medium' class="joinButton" @click="JoinClick">参与拼单</u-button>

    

</view>

</template>


<script>
export default {
    data() {
        return {
            form:{
                shopName:'阿迪达斯',
                type:'满几件打几折',
                des:'满1000元减500，差200元',
                vaildTime:'20min'
            },
            list:[{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
                    }
                 ],
            show: false,
            JoinShow: false,
            value:'',
            actionSheetList: [
				{
					text: '满几件打几折'
				},
				{
					text: '买几件送几件'
                },				
                {
					text: '满几元减几元'
                },
                {
					text: '满几元打几折'
				}
			],
        }
    },
    methods: {
			// 点击actionSheet回调
			actionSheetCallback(index) {
				this.form.type = this.actionSheetList[index].text;
            },
            JoinClick(){
                this.JoinShow = true
            },
            OkClick(){
                this.JoinShow = false
            }
        }
        
}
</script>

<style lang="scss">
    .banner {
		height: 300rpx;
        width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
    .wrap {
        margin-top: -180rpx;
        margin-left: 5%;
        width: 90%;
    }
    .joinButton {
        position: absolute;
        margin-top: 100rpx;
        margin-left: 35%;
    }
    .notice {
        padding: 20rpx;
        margin-left: 20rpx
    }
    .okButton {
        position: absolute;
        margin-left: 25%;
        padding: 30rpx
    }
</style>