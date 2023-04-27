<template>
	<view>
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in LunboImage" :key="item">
				<image :src="item" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="box">
			<view class="price">
				<text>￥{{info.sell_price}}</text>
				<text>￥{{info.market_price}}</text>
			</view>
			<view class="title">{{info.title}}</view>
			<view>货号:{{info.goods_no}}</view>
			<view class="quantity">库存:{{info.stock_quantity}}</view>
			<view class="">详细介绍</view>

			<view class="content" v-html="introduction.content"></view>
		</view>
		<view class="goodsNav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import myRequest from '../../util/myRequest'
	export default {
		data() {
			return {
				LunboImage: ['http://destiny001.gitee.io/image/ban1.jpg', 'http://destiny001.gitee.io/image/ban4.jpg'],
				info: [],
				introduction: {},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		onLoad(options) {
			// this.getLunboImage(options.id)
			this.getInfo(options.id)
			this.getIntroduce(options.id)
		},
		methods: {
			//获取轮播图的数据
			// async getLunboImage(id){
			// 	const result = await myRequest({url:`/api/getthumimages/${id}`})
			// 	this.LunboImage = result.message
			// }
			async getInfo(id) {
				const result = await myRequest({
					url: `/api/goods/getinfo/${id}`
				})
				this.info = result.message[0]
			},
			async getIntroduce(id) {
				const result = await myRequest({
					url: `/api/goods/getdesc/${id}`
				})
				this.introduction = result.message[0]
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		width: 750rpx;
		height: 700rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.box {
		width: 100vw;
		padding: 5px 12px 50px;
		box-sizing: border-box;
	}

	.price {
		margin: 10px 0;
		color: red;

		text:nth-child(2) {
			color: grey;
			margin-left: 10px;
			font-size: 14px;
			text-decoration: line-through;
		}
	}

	.title {
		padding-bottom: 10px;
		border-bottom: 2px solid rgba(128, 128, 128, 0.3);
		margin-bottom: 5px;
		line-height: 25px;
	}

	.quantity {
		padding: 0 0 7px 0;
		margin-bottom: 5px;
		border-bottom: 2px solid rgba(128, 128, 128, 0.3);
	}

	.content {
		// background-color: red;
		// width: 100vw;
		// padding: 0 12px;
		// box-sizing: border-box;
		font-size: 14px;
		color: grey;

		::v-deep img {
			width: calc(100vw - 24px);
			height: auto;
		}
	}
	.goodsNav{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
