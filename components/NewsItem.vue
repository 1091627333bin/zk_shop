<template>
	<view>
		<view class="newsItem" v-for="item in newsList" :key="item.id" @click="handleDetail(item.id)">
			<image src="http://destiny001.gitee.io/image/ban3.jpg" mode=""></image>
			<view class="newsInfo">
				<view>{{item.title}}</view>
				<view class="TimeAndClick">
					<view class="">发表时间：{{getTime(item.add_time)}}</view>
					<view>浏览：{{item.click}}次</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import moment from 'moment'
	moment.locale('zh-cn')
	export default {
		name:"NewsItem",
		props:['newsList','goDetail'],
		data() {
			return {
				
			};
		},
		methods:{
			getTime(date){
				return moment(date).format('YYYY-MM-DD')
			},
			handleDetail(id){
				console.log('11',id)
				this.goDetail(id)
			}
		}
	}
</script>

<style lang="scss">
.newsItem{
	display: flex;
	flex-wrap: wrap;
	// background-color: red;
	padding: 10px;
	padding-bottom: 5px;
	image{
		width: 120px;
		height: 90px;
	}
	border-bottom: 1px solid #b50e03;
	.newsInfo{
		width: calc(100vw - 140px);
		height: 100px;
		// background-color: red;
		box-sizing: border-box;
		padding: 7px;
		.TimeAndClick{
			display: flex;
			font-size: 12px;
			margin-top: 20px;
			justify-content: space-between
		}
	}
}
</style>