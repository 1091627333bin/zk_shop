<template>
	<view>
		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" circular :duration="1000">
			<swiper-item v-for="item in lunboList" :key="item.id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区 -->
		<view class="nav">
			<view class="nav-item" v-for="item in navs" :key="item.title" @click="changePage(item)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
	
		<!-- 推荐区 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			
			<Goods :goodsList="goodsList" :goGoodsDetail="goGoodsDetail"></Goods>
		</view>
	</view>
</template>

<script>
	import myRequest from '../../util/myRequest.js'
	import Goods from '../../components/Goods.vue'
	export default {
		components:{Goods},
		data() {
			return {
				lunboList: [],
				goodsList:[],
				navs:[
					{
						icon:"iconfont icon-ziyuan",
						title:"仲恺超市",
						path:"/pages/goods/goods"
					},
					{
						icon:"iconfont icon-guanyuwomen",
						title:"联系我们",
						path:"/pages/contact/contact"
					},
					{
						icon:"iconfont icon-tupian",
						title:"社区图片",
						path:"/pages/pics/pics"
					},
					{
						icon:"iconfont icon-shipin",
						title:"学习视频",
						path:"/pages/videos/videos"
					},
				]
			}
		},
		onLoad() {
			//获取轮播图的数据
			this.getLunbo()
			this.getGoods()
		},
		methods: {
			async getLunbo() {
				const result = await myRequest({url:'/api/getlunbo'})
				this.lunboList = result.message					
			},
			async getGoods(){
				const result = await myRequest({url:'/api/getgoods?pageindex=1'})
				console.log(result.message)
				this.goodsList = result.message	
			},
			changePage(item){
				uni.navigateTo({
					url:item.path
				})
			},
			goGoodsDetail(id){
				uni.navigateTo({
					url:`/pages/goodsDetail/goodsDetail?id=${id}`
				})
			}
		}

	}
</script>

<style lang="scss">
// @import url('~@/static/font/iconfont.css');
.swiper{
	width: 750rpx;
	height: 380rpx;
	image{
		width: 100%;
		height: 100%;
	}
}
.nav{
	display: flex;
	padding-bottom: 10px;
	border-bottom: 2px solid rgba(128, 128, 128, 0.3);
	.nav-item{
		width: 25%;
		font-size: 30rpx;
		text-align: center;
		view{
			width: 120rpx;
			height: 120rpx;
			background-color: #b50e03;
			border-radius: 50%;
			margin: 10px auto;
			color: white;
			font-size: 50rpx;
			line-height: 120rpx;
		}
	}
}
.hot_goods{

	color: #b50e03;
	background-color: #eee;
	.tit{
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color: #ffffff;
		letter-spacing: 20px;
		text-align: center;
	}	
	
}
</style>
