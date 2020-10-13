import React, { Component } from 'react';
import "../styles/Ctop.css"
import '../styles/font_ys9xqgdx8wp/iconfont.css'
import Xiala from "../comopents/xiala"
class Ctop extends Component {
	render() {
		return (
			<div>
			<div className="Ctop">
			<h2 className="Ctoph2">商城后台管理系统</h2>

			<span className="Ctopspan">☷</span>
			<ul className="Ctopul">
			
			<li className="Ctopli1">商城设置</li>	
			<li className="Ctopli2">系统设置</li>	
			</ul>
			<div className="Ctop-right">
				<li className="Crightli1">
				    <i className="Crightli1-i iconfont icon-laba "></i>	
					<p className="Crightli1-p">4</p>
				</li>
				<li className="Crightli2">
				    <i className="Crightli1-i iconfont icon-lingdang"></i>	
					<p className="Crightli1-p">9</p>
				</li>
				<li className="Crightli3">
				<Xiala/>
				</li>
				<li className="Crightli4">前台首页</li>
			</div>

			</div>	
			</div>
		);
	}
}

export default Ctop;