import React, { Component } from 'react';
import "../styles/font_ys9xqgdx8wp/iconfont.css"
import "../styles/Buttom.css"
import  Cindex from "../pages/Cindex"
class Buttom extends Component {
	render() {
		return (
			<div>
			<div className="Cbig-box">
			<div className="Cbox-left">
				<div className="Ckongge">
				<Cindex/>
					</div>	
			</div>		
			<div className="Cbox-right">
				<div className="Cbuttom-top">
					<li className="Cbuttom-top-li">
					<span className="Cbuttom-tupian iconfont icon-tubiao-"></span>
					<h4 className="Cbuttom-h4">我的桌面</h4>	
					</li>
				</div>

				</div>		
			</div>	
			</div>
		);
	}
}

export default Buttom;