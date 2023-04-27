<template>
	<view class="pics">
		<!-- 左侧导航栏 -->
		<scroll-view scroll-y="true" class="left-list">
			<view @click="handleChange(item,index)" :class="currentIndex==index ? 'active' : ''"
				v-for="(item,index) in pics" :key="item.id">
				{{item.title}}
			</view>
		</scroll-view>
		
		<scroll-view scroll-y="true"  class="imgList">
			<view class="imgItem" v-for="(item,index) in currentImage" :key="item.id">
				<image  src="http://destiny001.gitee.io/image/ban4.jpg" mode="" @click="preview(index)"></image>
				<view class="">{{item.title}}</view>
			</view>
			<view v-if="currentImage.length==0" style="margin: 10px;">暂无数据</view>
		</scroll-view>
		<!-- 右侧图片展示 -->
	</view>
</template>

<script>
	import myRequest from '../../util/myRequest'
	export default {
		data() {
			return {
				pics: [],
				currentIndex: 0,
				currentImage:[]
			}
		},
		onLoad() {
			this.getPics()
		},
		methods: {
			// 得到左侧导航栏的数据
			async getPics() {
				const result = await myRequest({
					url: "/api/getimgcategory"
				})
				console.log(result)
				this.pics = result.message
				// 开始先获得第一个item的数据展示
				this.getImage(result.message[0])
			},
			handleChange(item, index) {
				this.currentIndex = index
				this.getImage(item)
			},
			// 得到右侧图片区的数据
			async getImage(item) {
				const result = await myRequest({
					url: `/api/getimages/${item.id}`
				})
				console.log(result.message)
				this.currentImage = result.message
			},
			// 预览图片
			preview(index){
				const urls = this.currentImage.map(item=>{
					return 'http://destiny001.gitee.io/image/ban4.jpg'
				})
				uni.previewImage({
					urls,
					current:index
				})
			}
		}
	}
</script>

<style lang="scss">
	.pics{
		display: flex;
		flex-wrap: wrap;
	}
	.left-list {
		width: 200rpx;
		height: calc(100vh - 44px);
		// padding-right: 2px;
		box-sizing: border-box;
		border-right: 1px solid #eee;

		view {
			height: 60px;
			// background-color: red;
			text-align: center;
			line-height: 60px;
			border-bottom: 1px solid rgba(196, 196, 196, 0.5);
		}

		view:last-child {
			border: 0;
		}

		.active {
			background-color: #c41e00;
			color: white;
		}
	}
	.imgList{
		width: calc(100vw - 200rpx);
		height: 100vh;
	}
	.imgItem{
		padding: 0 5px;
		margin-top: 10px;
		image{
			width: 100%;
		}
	}
</style>
