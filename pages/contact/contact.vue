<template>
	<view class="contact">
		<image style="width: 100%;height: 320rpx;" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		<view class="info">
			<view>联系电话：337845818（点击拨打）</view>
			<view>地址：广东省广州市海珠区仲恺农业工程学院</view>			
		</view>
		<map class="map" longitude="113.286271" scale="20"  latitude="23.114458" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				markers:[
					{
						longitude:"113.286271",
						latitude:"23.114458",
						iconPath:"../../static/zk.webp",
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
 .info{
	 view{
		 margin-left: 20px;
		 line-height: 40px;
		 font-size: 15px;
		 border-bottom: 1px solid #eee;
	 }
 }
 .map{
	 margin-top: 2px;
	 height: 750rpx;
	 width: 750rpx;
 }
</style>
