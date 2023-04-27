<template>
	<view>
		<view class="goods_list">
			<view class="goods_item" v-for="item in goodsList" :key="item.id" @click="handleDetail(item.id)">
				<image src="http://destiny001.gitee.io/image/ban1.jpg" mode=""></image>
				<view class="price">
					<text>￥{{item.sell_price}}</text>
					<text>￥{{item.market_price}}</text>
				</view>
				<view class="name">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myRequest from '../util/myRequest.js'
	export default {
		name:"Goods",
		props:['goodsList',"goGoodsDetail"],
		methods:{
			handleDetail(id){
				this.goGoodsDetail(id)
			}
		}
	}
</script>

<style lang="scss">
.goods_list{
	    
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		// margin-top: 1px;
		padding: 0 15rpx;
		.goods_item{
			padding: 30rpx 15rpx;
			box-sizing: border-box;
			background-color: #ffffff;
			width: 350rpx;			
			image{
				width: 80%;
				height: 150px;
				margin-left: 50%;
				transform: translateX(-50%);
			}
			margin: 5px 0;			
			.price{
				font-size: 36rpx;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}
			.name{
				font-size: 32rpx;
				color: black;
				line-height: 50rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>