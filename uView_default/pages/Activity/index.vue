<template>
    <view>
   <image class="banner" src="/static/banner.png">
    <view class="wrap">
   <u-swiper :list="list"></u-swiper>
    <view>
            <u-card :title="title" :sub-title="subTitle" full="true"> 
                <view class="" slot="body">
                   <image class="activity" src="/static/activity.jpg">                  
                    <u-button class="cardbutton" size="mini"  @click="publicOrder">发起拼单</u-button>
                </view>
            </u-card>
                        <u-card :title="title" :sub-title="subTitle" full="true">  
                <view class="" slot="body">
                   <image class="activity" src="/static/activity.jpg">                  
                    <u-button class="cardbutton" size="mini"  @click="publicOrder">发起拼单</u-button>
                </view>
            </u-card>
                        <u-card :title="title" :sub-title="subTitle" full="true"> 
                <view class="" slot="body">
                   <image class="activity" src="/static/activity.jpg">                  
                    <u-button class="cardbutton" size="mini"  @click="publicOrder">发起拼单</u-button>
                </view>
            </u-card>
                        <u-card :title="title" :sub-title="subTitle" full="true"> 
                <view class="" slot="body">
                   <image class="activity" src="/static/activity.jpg">                  
                    <u-button class="cardbutton" size="mini"  @click="publicOrder">发起拼单</u-button>
                </view>
            </u-card>
                        <u-card :title="title" :sub-title="subTitle" full="true">  
                <view class="" slot="body">
                   <image class="activity" src="/static/activity.jpg">                  
                    <u-button class="cardbutton" size="mini"  @click="publicOrder">发起拼单</u-button>
                </view>
            </u-card>
                        <u-card :title="title" :sub-title="subTitle" full="true"> 
                <view class="" slot="body">
                   <image class="activity" src="/static/activity.jpg">                  
                    <u-button class="cardbutton" size="mini"  @click="publicOrder">发起拼单</u-button>
                </view>
            </u-card>
     </view>  


    </view>
</template>


<script>
import uImage from '../../uview-ui/components/u-image/u-image.vue'
export default {
    data(){
        return {
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
            title: '阿迪达斯满4件五折',
        }
    },
    methods: {
        publicOrder(){
            uni.switchTab({
              url: '../publish/index',
              fail(res){
                  console.log(res)
              }
            });
        },
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
    .activity {
        height: 200rpx;
        width: 100%;
              padding: 10rpx;
    }
    .cardbutton{
      color:black;
      margin-left: 40%;
    }


</style>