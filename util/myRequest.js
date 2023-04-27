

const myRequest = (params)=>{
	return new Promise((resolve,reject)=>{
		return uni.request({
			...params,
			url:"http://localhost:8082"+params.url,
			
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

export default myRequest