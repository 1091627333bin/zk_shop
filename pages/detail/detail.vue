<template>
	<view class="box">
		<view class="title">{{news.title}}</view>
		<view class="info">
			<text>发布时间：{{getFormat(news.add_time)}}</text>
			<text>浏览：{{news.click}}</text>
		</view>
		<view class="content" v-html="news.content">
			
		</view>
	</view>
</template>

<script>
import myRequest from '../../util/myRequest'
import moment from 'moment'
	export default {
		data() {
			return {
				news:{}
			}
		},
		onLoad(options) {
			this.getDetail(options.id)
			
		},
		methods: {
			async getDetail(id){
				const result = await myRequest({url:`/api/getnew/${id}`})
				console.log(result)
				this.news = result.message[0]
			},
			getFormat(date){
				return moment(date).format('YYYY-MM-DD')
			}
		}
	}
</script>

<style lang="scss">
.box{
	// width: 100vw;
	// height: 100vh;
	// background-color: red;
	padding: 10px;
	line-height: 30px;
	.title{
		font-size: 16px;
		font-weight: bold;
		text-align: center;
	}
	.info{
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		color: grey;
	}
}
</style>
