const baseURL = process.env.API_BASE_URL
wx.request({
  url: `${baseURL}/products`
})
