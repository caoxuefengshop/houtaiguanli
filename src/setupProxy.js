const { createProxyMiddleware } = require('http-proxy-middleware');
	
	module.exports = function(app) {
	    // /api 表示代理路径
	    // target 表示目标服务器的地址
	    app.use(
	        createProxyMiddleware('/api', {
	      // http://localhost:8080/ 地址只是示例，实际地址以项目为准http://10.12.159.91:8080/login
	        // target: 'http://10.12.159.91:8080',
	        target: 'http://10.35.167.26:8080',
	        // 跨域时一般都设置该值 为 true
	        changeOrigin: true,
	        // 重写接口路由
	        pathRewrite: {
	          '^/api': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
	        }
	      })
		)
		app.listen(8080);
	  }
	//   let res = await axios.get('/api/admin/category');