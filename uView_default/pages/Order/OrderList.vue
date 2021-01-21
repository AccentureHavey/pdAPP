<template>
<view>
        <image class="banner" src="/static/banner.png"></image>
            <view class="wrap">
   <u-swiper :list="list"></u-swiper>
</view>
        <u-input v-model="form.type" type="select" style="width:200px" @click="show = true" placeholder="选择商店" border="true"/>
		<u-select v-model="show" :list="actionSheetList"></u-select>
        <view>
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
                    <u-card :title="title" :sub-title="subTitle"> 
                <view class="" slot="body">
                    <p class="cardtext">等待时间：20分钟</p>
                    <u-button class="cardbutton" size="mini" type="error">立即拼单</u-button>
                </view>
            </u-card>
     </view>  

     </view>
    
</template>

<script>
export default {
    data(){
        return {
            title: '阿迪达斯4件5折求拼,差一件',
            subTitle: '10分钟前',
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
				actionSheetList: [
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
						label: 'FILA'
					}
				]
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
        margin-top: -200rpx;
        margin-left: 5%;
        width: 90%;
    }
    .cardtext {   
        width: 50%;
    }
    .cardbutton {
        float: right;
        margin-top: -40rpx;
    }
    .shopItem{
        margin-top: 50rpx;
        width: 150rpx;
        height: 150rpx;
    }
</style>