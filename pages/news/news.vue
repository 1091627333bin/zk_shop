<template>
	<view>
		<view class="newsList">
			<NewsItem :newsList="newsList" :goDetail="goDetail"></NewsItem>
		</view>
	</view>
</template>

<script>
import myRequest from '../../util/myRequest'
import NewsItem from "../../components/NewsItem.vue"

	export default {
		data() {
			return {
				newsList:[]
			}
		},
		components:{NewsItem},
		onLoad() {
			this.getNewsList()
		},
		methods: {
			async getNewsList(){
				const result = await myRequest({url:"/api/getnewslist"})
				this.newsList = result.message
			},
			goDetail(id){
				uni.navigateTo({
					url:`/pages/detail/detail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
