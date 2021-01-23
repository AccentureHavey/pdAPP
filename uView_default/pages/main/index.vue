<template>
<view>
   <image class="banner" src="/static/banner.png"></image>
   <u-search placeholder="搜索店铺" @search="search" height="20" type="select" color="#FFFFFF" search-icon-color="#FFFFFF" placeholder-color="#FFFFFF" bg-color="#FFFFFF" border-color="#FFFFFF" v-model="shop" class="searchShop"></u-search>
<view class="wrap">
   <u-swiper :list="list"></u-swiper>
</view>

<view class="shop_list">
   	<u-grid :col="5" :border="false">
		<u-grid-item @click="detail">			
            <image class="shopItem" src="/static/adi.png"></image>
			<view class="grid-text">阿迪达斯</view>
		</u-grid-item>
		<u-grid-item>
			<image class="shopItem" src="/static/nike.png"></image>
			<view class="grid-text">耐克</view>
		</u-grid-item>
		<u-grid-item>
			<image class="shopItem" src="/static/puma.png"></image>
			<view class="grid-text">彪马</view>
		</u-grid-item>
        		<u-grid-item>
			<image class="shopItem" src="/static/liweisi.png"></image>
			<view class="grid-text">李维斯</view>
		</u-grid-item>
        		<u-grid-item>
			<image class="shopItem" src="/static/lining.png"></image>
			<view class="grid-text">李宁</view>
		</u-grid-item>
	</u-grid>
       	<u-grid :col="5" :border="false">
		<u-grid-item>
			<image class="shopItem" src="/static/sikaiqi.png"></image>
			<view class="grid-text">斯凯奇</view>
		</u-grid-item>
		<u-grid-item>
			<image class="shopItem" src="/static/fila.png"></image>
			<view class="grid-text">FILA</view>
		</u-grid-item>
		<u-grid-item>
			<image class="shopItem" src="/static/bosideng.png"></image>
			<view class="grid-text">波司登</view>
		</u-grid-item>
        		<u-grid-item>
			<image class="shopItem" src="/static/vans.png"></image>
			<view class="grid-text">Vans</view>
		</u-grid-item>
        		<u-grid-item>
			<image class="shopItem" src="/static/kuangwei.png"></image>
			<view class="grid-text">匡威</view>
		</u-grid-item>
	</u-grid>
</view>
<view class="newest">
<u-notice-bar mode="horizontal" type="primary" :list="newest_list"></u-notice-bar>
</view>
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
import uImage from '../../uview-ui/components/u-image/u-image.vue'
export default {
  components: { uImage },
    data (){
        return {
            shop: '',
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
            newest_list:[
                '158**** 成功拼单 4件5折',
					'158**** 成功拼单 满1000减500'
            ],
            Shopshow:false,
            title: '阿迪达斯4件5折求拼,差一件',
			subTitle: '10分钟前'

        }
    },
    methods:{
        JoinOrder(){
            uni.navigateTo({
              url: '../Order/joinOrder'
            });
        },
        detail(){
            uni.navigateTo({
              url: '../Order/OrderList'
            });
        },
        confirm(){
            uni.navigateTo({
              url: '../Order/OrderList'
            }); 
        },
        search(value){
            console.log(value)
                        uni.navigateTo({
              url: '../Order/index'
            }); 
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
    .inputstyle {
        position: absolute;
        margin-left: -500rpx;
        margin-top: 50rpx;
    }
    .wrap {
        margin-top: -180rpx;
        margin-left: 5%;
        width: 90%;
    }
    .shop_list {
        width: 100%;
    }
    .shopItem {
        height: 60rpx;
        width: 80rpx;
        padding: 10rpx;
    }
    .cardtext {
        
        width: 50%;
    }
    .cardbutton {
        float: right;
        margin-top: -40rpx;
    }
    .searchShop {
         float: left;
         margin-top: -280rpx;
         width:80%;
         margin-left: 10%;
    }
</style>