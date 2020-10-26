// import axios from "axios"


// // 将所有的action提取出来写在actionCreators.js中
// // 这个模块里是所有action的定义

// // 系统设置-基本设置的渲染请求
// export const rendweb = () => {
//     return (dispatch) => {
//         axios({
//             url: "http://localhost:3000/valsList",
//             method: "get"
//         }).then(res => {
//             // console.log("res.data",res.data);
//             dispatch({
//                 type: "RENDWEB",
//                 payload: res.data
//             });
//         })
//     }
// }

// // 系统设置-屏蔽词的渲染请求
// export const rendBlock = () => {
//     return (dispatch) => {
//         axios({
//             // json-server
//             // url:"http://localhost:3000/rendblockword",
//             // java
//             url: "http://10.12.159.41:8080//bfind",
//             method: "get"
//         }).then(res => {
//             // console.log(res.data.data[0].bword);
//             dispatch({
//                 type: "RENDBLOCK",
//                 // json-server
//                 // payload:res.data.val
//                 // java
//                 payload: res.data.data[0].bword
//             })
//         })
//     }
// }
// // 系统设置-屏蔽词的修改请求
// export const changeBlock = (payload) => {
//     return (dispatch) => {
//         // axios.patch(
//         // console.log("payload:",payload);
//         // let data = {
//         //     bword:payload.bword
//         // }
//         console.log({ bword: payload })
//         axios({
//             url: "http://10.12.159.41:8080//bupdate",
//             method: "get",
//             params: {
//                 bword: payload
//             }
//         }).then(res => {
//             // console.log("res.data.val:",res.data.val);
//             dispatch({
//                 type: "CHANGEBLOCK",
//                 payload
//             })
//         })
//     }
// }


