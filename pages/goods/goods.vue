<template>
	<view class="back">
		<Goods :goodsList="goodsList" :goGoodsDetail="goGoodsDetail"></Goods>
		<view class="over" v-show="flag">
			-----我是有底线的-----
		</view>
	</view>
</template>

<script>
	import Goods from '../../components/Goods.vue'
	import myRequest from '../../util/myRequest.js'
	export default {
		components:{Goods},
		data() {
			return {
				pageindex: 1,
				goodsList:[],
				flag:false
			}
		},
		onLoad() {
			this.getGoods()
		},
		methods:{
			async getGoods(){
				const result = await myRequest({url:`/api/getgoods?pageindex=${this.pageindex}`})
				if(result.message.length==0){
					this.flag=true
					return;
				}
				this.goodsList = [...this.goodsList,...result.message]
			},
			goGoodsDetail(id){
				uni.navigateTo({
					url:`/pages/goodsDetail/goodsDetail?id=${id}`
				})
			}
		},
		onReachBottom(){
			this.pageindex++
			if(this.flage==true) return;
			this.getGoods()
		},
		onPullDownRefresh() {
			this.pageindex=1
			this.flag=false
			this.goodsList=[]
			setTimeout(()=>{
				this.getGoods()
				uni.stopPullDownRefresh();
			},1000)
		}
	}
</script>

<style lang="scss">
	.back{
		background-color: #eee;
		.over{
			text-align: center;
			line-height: 25px;
		}
	}

</style>
