import React, { Component } from 'react';

import  "../styles/Buttom.css"
import Biaoge from "../shouyexiazujian/Biaoge"

import {indexView} from "../pages/Axios"

import Echats from "../shouyexiazujian/Echats"

import Gundondpaihang from "../shouyexiazujian/Gundondpaihang"
import Echats2 from "../shouyexiazujian/Echats2"




// import {connect} from "react-redux";

class Shouye extends Component {
	constructor(){
		super()
		this.state={
			time:"",
			list:{},
			data:{}
		}
	}
	componentDidMount(){
		setInterval(()=>{
			this.dateToString();
		},1000)

	indexView().then(res => {
		console.log(res.data.data[0])
		this.setState({
			data:res.data.data[0]
		})
	})
	}
	 dateToString(){

		var d = new Date();
		var a = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六",];
		var _y = d.getFullYear();
		var _m = d.getMonth()+1;
		var _d = d.getDate();
		var _h = this.toTwo(d.getHours());
		var _mm = this.toTwo(d.getMinutes());
		var _s = this.toTwo(d.getSeconds());      
		// var _w = d.getDay();
		var str = _y + "年" + _m + "月" + _d + "日";
	   str += _h + "时" + _mm + "分" + _s + "秒"+ a[d.getDay()];
		this.setState({
			time:str
		})
	//    console.log(str); 
	   return str;
	  
		}
		toTwo(v){
			return v<10?"0"+v:v;
		}
	render() {
		return (
	
			<div className="dakaung">


			<div className="waikuang">
				<div className="gaunliyuan">
				<span className="huanying">欢迎管理员：</span>
				<i className="huiyuanming">admin</i>
				<p id="shijian">
				{this.state.time}
				</p>
				</div>
				</div>
			<div className="tongji">
			<p className="shujutongji">数据统计</p>
			</div>	
		<div className="jieguo">
			<ul className="liutiao">
			<li className="jine">
			<p className="chengjiaojine">成交金额</p>
		<h2 className="money">{this.state.data.totalprice}</h2>
			</li>	
			<li className="jine">
			<p className="chengjiaojine">留言</p>
			<h2 className="money">666条</h2>
			</li>	
			<li className="jine">
			<p className="chengjiaojine">订单</p>
		<h2 className="money">{this.state.data.ordergoods}条</h2>
			</li>	
			<li className="jine">
			<p className="chengjiaojine">通知</p>
		<h2 className="money">{this.state.data.state}条</h2>
			</li>	
			<li className="jine">
			<p className="chengjiaojine">待处理</p>
		<h2 className="money">{this.state.data.returngoods}</h2>
			</li>	
			<li className="jine">
			<p className="chengjiaojine">退款申请</p>
			<h2 className="money">0条</h2>
			</li>	
			</ul>

			</div>	

		<div className="tuxing">
			<ul>
				<li className="tuixng1">
					<div className="left1">
						<p>信息统计</p>
					</div>
					<div className="biaoge">
					<Biaoge/>
					</div>
				</li>


				<li className="tuxing2">
				<div className="left2">
						<p>数据统计</p>
					</div>
					<div className="biaoge2">
					<Echats/>	
				
					</div>
				</li>
				<li className="tuxing4">
				{/* <Gundondpaihang/> */}
				<Echats2/>
				</li>
			</ul>

		</div>	

<div className="xitongxinxi">
	<div className="xitongtop">
		<p>系统信息</p>
	</div>		
	<div className="dabiao">
		<table border="1" cellspacing="0" cellpadding="0">
			<tr className="diyigetr">
			<td colSpan="2">服务器信息</td>	
			</tr>
			<tr>
			<td className="xiaotd">
			服务器计算机名</td>	
			<td >http://127.0.0.1/</td>	
			</tr>
			<tr>
			<td >服务器IP地址</td>	
			<td >192.168.1.1</td>	
			</tr>
			<tr>
			<td >服务器域名</td>	
			<td >www.xxx.net</td>	
			</tr>
			<tr>
			<td >服务器端口</td>
			<td >80</td>	
			</tr>
			<tr>
			<td >服务器IIS版本</td>	
			<td >Microsoft-IIS/6.0</td>	
			</tr>
			<tr>
			<td >本文件所在文件夹</td>	
			<td >D:\WebSite\</td>	
			</tr>
			<tr>
			<td >服务器操作系统</td>	
			<td >	Microsoft Windows NT 5.2.3790 Service Pack 2</td>	
			</tr>
			<tr>
			<td >系统所在文件夹</td>	
			<td >C:\WINDOWS\system32</td>	
			</tr>
			<tr>
			<td >服务器脚本超时时间	</td>	
			<td >	30000秒</td>	
			</tr>
			<tr>
			<td >服务器的语言种类</td>	
			<td >Chinese (People's Republic of China)</td>	
			</tr>

		</table>
		<div className="shouyefooter">
			<p>Copyright ©2020 All Rights Reserved.</p>
		</div>
	</div>		


</div>

		</div>
		);
	}
}

// export default connect((state)=>{
//     console.log("state",state);
//     return {
// 		Goodslist:state.Goodslist
//     }
// })(Shouye);

export default Shouye

// this.props.dispatch(
// 	rendweb()
// );
