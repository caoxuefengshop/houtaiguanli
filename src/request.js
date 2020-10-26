import axios from "axios";

// 请求拦截器

axios.interceptors.request.use(function(config){
    // config.baseURL = "http://localhost:3000";
    // console.log("config",config);

    // token：是验证身份的。
    // 携带token的逻辑：
    // 补充：token什么时候存储的？当登录成功时，后端会产生一个token，发给前端，前端拿到token，
    // 保存在cookie或者localStorage。

    // 在请求拦截器里，就需要携带token给服务器端。
    // 1）、（假定存储在localStorage中）从localStorage中获取token
    let token = localStorage.getItem("token");
    if(token){
        config.headers.authorization = token;
    }
    // 加loading。
    // Loading = true;
    return config;
},function(){

});


// 响应拦截器
axios.interceptors.response.use(
	function(res){
        // 在响应回来后，then（或者catch）之前，对res对象进行处理
        res.data.push({"name":"张三丰"});
        console.log("res",res);
        return res;
	},
      function(err){
              return Promise.reject(err)
      }
)
