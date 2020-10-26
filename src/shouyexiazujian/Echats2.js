import React, { Component } from 'react';
import "../styles/Echarts2.css"
import "../styles/font_ys9xqgdx8wp/iconfont.css"



import {orderSort} from "../pages/Axios"
class Echats2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data:[]
		}
	}
	componentDidMount(){
		orderSort().then(res=>{
			console.log("res",res.data.data)
			this.setState({
				data:res.data.data
			})
		})
	}
		xianshi=()=>{
// 			num: null
// ordergoods: null
// payment: null
// pname: "华为p30"
// returngoods: null
// state: null
// states: null
// totalprice: 0
		return 	this.state.data.map((item,index)=>{
				return (
					<li ><i className=" iconfont icon-lingdang1"></i></li>	


				)
			})
		}

	render() {
		return (
			<div className="box1">
				<div >
{/* <li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
<li ><i className=" iconfont icon-lingdang1"></i>123213</li>
					 */}
					
				</div>
			</div>
		);
	}
}

export default Echats2;