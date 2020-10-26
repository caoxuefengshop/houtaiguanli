import axios from "axios"

let url = "/api"
export function Login(data){
    var params = new URLSearchParams();   
     params.append('username', data.username);   
     params.append('password', data.password);  
 
    return axios({
        //根据接口写
        // url:"/devApi/login",
        // url:"/login",
        // method:"post",
        // data:data         //请求类型为 post 时
        //params:data       请求类型为 get 时
        method:'post',
        // url:"http://10.12.159.91:8080/login",
        url:"http://c8emrv.natappfree.cc/login",
        data:params
    })
 
}

// 首页
export function indexView(){

    return axios({
        //根据接口写
        // url:"/devApi/login",
        url:"http://10.35.167.24:8080/indexView",
        method:"get",
        // data:data         //请求类型为 post 时
        //params:data       请求类型为 get 时
    })
}

// 商品增加
export function goodslistadd(data){
  
    // var params = new URLSearchParams();   
    // params.append('name', data.goodsname);   
    // params.append('num', data.goodsnum);  
    // params.append('price', data.price);  
    // params.append('stock', data.goodstock);  
    // params.append('shijian', data.goodstime);   
   
    return axios({
        //根据接口写
        // url:"/devApi/login",
        // dataType:'json',
        // params:JSON.stringify(data),
        url:"http://10.35.167.26:8080/addProduct",
        method:"post",
        // contentType: 'application/json; charset=UTF-8',
        // contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        // data:data  ,       //请求类型为 post 时
        data // 请求类型为 get 时
    })
}



// axios({ 
//     method:'get',
//     url:'api/goodslists',
//     params :{ "goodsid":"01003" }

//      })
// 分页显示
export function  products(num){

    return axios({
        //根据接口写
        // url:"/devApi/login",
      
        url:"http://10.35.167.26:8080/products",
        method:"get",
        // data:data         //请求类型为 post 时
       params:{currpage:num}     // 请求类型为 get 时
    })
}


// 查询
export function chaxun1(data){
    var params = new URLSearchParams();   
    // params.append('goodsname', data);   
    return axios({
        //根据接口写
        // url:"/devApi/login",
      
        url:"http://10.35.167.26:8080/product",
        method:"post",
        // data:data         //请求类型为 post 时
       params: {goodsname:data}  // 请求类型为 get 时
    })
}
//删除
export function shanchu(num){
    // let  a = Number(num)
    var params = new URLSearchParams();   
    params.append('id', num);   
    return axios({
        //根据接口写
        // url:"/devApi/login",
      
        url:"http://10.35.167.26:8080/delProduct",
        method:"post",
        // data:num      //请求类型为 post 时
       data: params  // 请求类型为 get 时
    })
}


export function updateProduct(data){
  
    // var params = new URLSearchParams();   
    // params.append('name', data.name);   
    // params.append('num', data.num);  
    // params.append('price',data.price);  
    // params.append('stock', data.stock);  
    // params.append('id', data.id);   
   
    return axios({
        //根据接口写
        // // url:"/devApi/login",
        // dataType:'json',
        // params:JSON.stringify(params),
        url:"http://10.35.167.26:8080/updateProduct",
        method:"post",
        contentType: 'application/json; charset=UTF-8',
        // contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        // data:data  ,       //请求类型为 post 时
        data  // 请求类型为 get 时
    })
}



export function orderStatus(){

    return axios({
        //根据接口写
        // url:"/devApi/login",
        url:"http://10.35.167.24:8080/orderStatus",
        method:"get",
        // data:data         //请求类型为 post 时
        //params:data       请求类型为 get 时
    })
}


export function orderSort(){

    return axios({
        //根据接口写
        // url:"/devApi/login",
        url:"http://10.35.167.24:8080/orderSort",
        method:"get",
        // data:data         //请求类型为 post 时
        //params:data       请求类型为 get 时
    })
}