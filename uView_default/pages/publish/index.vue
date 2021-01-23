<template>
<view>
    <image class="banner" src="/static/banner.png">
    <view class="wrap">
   <u-swiper :list="list"></u-swiper>
</view>
<view class="formbord">
    <u-form :model="form" ref="uForm">
        <u-form-item label="店铺">
			<u-input v-model="form.shopName" :type="type" @click="Shopshow = true"/>
		    <u-select v-model="Shopshow" :list="ShopList" @confirm="confirm"></u-select>
		</u-form-item>
        <u-form-item label="优惠类型" label-width="150rpx">
			<u-input v-model="form.type" type="select" @click="show = true" />
		    <u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
		</u-form-item>
        <u-form-item label="差额" label-width="150rpx"><u-input v-model="form.des" /></u-form-item>
        <u-form-item label="描述" label-width="150rpx"><u-input v-model="form.remark"/></u-form-item>
        <u-form-item label="有效时间" label-width="150rpx"><u-input v-model="form.vaildTime" /></u-form-item>
        <u-form-item label="状态" label-width="150rpx"><u-button type='primary' size='mini'>待发布</u-button></u-form-item>
    </u-form>
</view>
	    <u-popup v-model="PublishShow" mode="bottom" border-radius="14" width="500rpx" height="300px">
			<view class="notice">发布成功,为您自动匹配到以下拼单</view>
			 <u-card :title="title" :sub-title="subTitle"> 
                <view class="" slot="body">
                    <p class="cardtext">等待时间：20分钟</p>
                    <u-button class="cardbutton" size="mini" type="error" @click="JoinOrder">立即拼单</u-button>
                </view>
            </u-card>
             <u-card :title="title" :sub-title="subTitle"> 
                <view class="" slot="body">
                    <p class="cardtext">等待时间：20分钟</p>
                    <u-button class="cardbutton" size="mini" type="error">立即拼单</u-button>
                </view>
            </u-card>
	</u-popup>

	<u-popup v-model="JoinShow" mode="center" border-radius="14" width="500rpx" height="140px">
			<view class="notice">已提醒对方，对方确认后，您将收到对方联系方式！</view>
            <u-button type='success' size='medium' class="okButton" @click="OkClick">了解</u-button>
	</u-popup>
<u-button type='success' size='medium' class="publish" @click="publishClick">发布拼单</u-button>

    

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
				
				remark:'',
                vaildTime:'20min'
			},
			type: 'select',
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
			Shopshow:false,
			PublishShow:false,
			JoinShow:false,
			title: '阿迪达斯4件5折求拼,差一件',
			subTitle: '10分钟前',
			ShopList:[
					{
						value: '1',
						label: '阿迪达斯'
					},
					{
						value: '2',
						label: '耐克'
					},
					{
						value: '3',
						label: '彪马'
					}
			],
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
			confirm(e){
				this.form.shopName = e[0].label
			},
			publishClick(){
				console.log("publish")
				this.PublishShow = true
			},
			JoinOrder(){
				this.JoinShow = true
			},
			OkClick(){
			uni.navigateTo({
              url: '../Order/index'
            });
            }
		}
}
</script>

<style lang="scss">
.formbord {
	padding: 50rpx;
}
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
    .publish {
        position: absolute;
        margin-top: 100rpx;
        margin-left: 35%;
    }
	.notice {
        padding: 20rpx;
        margin-left: 20rpx
    }
	.cardbutton {
        float: right;
        margin-top: -40rpx;
    }
	.okButton {
        position: absolute;
        margin-left: 25%;
        padding: 30rpx
    }
</style>