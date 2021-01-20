<template>
    <view>
        <image class="banner" src="/static/banner.png">
                <view class="name">{{UserInfo.nickName}}</view>
        <view class="level">{{"级别："+UserInfo.level}}</view>
        </image>
        <u-avatar class="avatar" :src="UserInfo.avatarUrl"></u-avatar>
        <view class="StateList">
    <u-grid :col="4" :border="false">
		<u-grid-item>
			<u-icon name="more-circle" color="red" :size="60" class="StateItem"></u-icon>
			<view class="grid-text">全部拼单</view>
		</u-grid-item>
		<u-grid-item>
			<u-icon name="clock" color="red" :size="60" class="StateItem"></u-icon>
			<view class="grid-text">等待拼单</view>
		</u-grid-item>
		<u-grid-item>
			<u-icon name="info-circle" color="red" :size="60" class="StateItem"></u-icon>
			<view class="grid-text">过期拼单</view>
		</u-grid-item>
        		<u-grid-item>
			<u-icon name="checkmark-circle" color="red" :size="60" class="StateItem"></u-icon>
			<view class="grid-text">完成拼单</view>
		</u-grid-item>
	</u-grid>
        </view>
        <u-line color="blue" class="line"/>
            <view class="record">
                <!-- 历史拼单 -->
            <u-card title="阿迪达斯满4件5折求拼" sub-title="30分钟前"> 
                <view class="" slot="body">
                    <p class="cardtext">等待时间：20分钟</p>
                    <u-button class="cardbutton" size="mini" type="error">等待拼单</u-button>
                </view>
            </u-card>
     </view>   
    </view>
    
</template>

<script>
export default {
    data() {
        return {
            UserInfo:{
                avatarUrl:'../../static/favicon.ico',
                nickName:'微信名称',
                PhoneNumber:'15800908003',
                level:'黄金'
            },
            MyOrder:[
                {
                    Id:'',
                    status:'',
                    Description:'',
                    CreatedAt:'',
                    UsId:'',
                    IsDel:'',
                    ExpiredAt:'',
                    ShopId:'',
                    ShopName:''                   
                }
            ],
                                    
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
    .avatar {
        float: left;
        width: 20%;
		margin-left: 15%;
        margin-top: -80rpx
    }
    .name {
        width: 30%;
        margin-left: 30%;
        margin-top: -260rpx;
        color: aliceblue;
        font-weight:bold;
    }
    .level {
        width: 30%;
        margin-left: 30%;
        color: aliceblue;
        font-weight:bold;
    }
    .StateList{
        height: 300rpx;
        width: 100%;
		margin-top: 180rpx;
		margin-right: auto;
    }
    .StateItem {
        padding: 10rpx;
    }
    .record {
        margin-top: -130rpx;
    }
    .cardtext {
        width: 50%;
    }
    .cardbutton {
        float: right;
        margin-top: -40rpx;
    }
    .line {
       height: 3rpx;
    }
</style>