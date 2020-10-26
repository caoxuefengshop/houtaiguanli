import React, { Component } from 'react';
import "../styles/font_ys9xqgdx8wp/iconfont.css"
import "../styles/Buttom.css"
import  Cindex from "./Cindex"
import  System from "./System"
import {Route, Redirect } from "react-router-dom";
import Shouye from "../comopents/Shouye"
import Tanchu from "../comopents/danchukuang"
import  Invoice from "../comopents/Invoice"
import Goodslist from "../comopents/Goodslist"
class Buttom extends Component {
	
	render() {
		
		return (
			<div>
			<div className="Cbig-box">
			<div className="Cbox-left">
				<div className="Ckongge">
		
				<Route  path="/shouye/shang" component={Cindex}/>
				<Route path="/shouye/System" component={System}/>
				
				{/* <Redirect from="/shouye" to="/shouye/shang" /> */}
				<Route  exact={true} path="/shouye/System/danchu" component={Tanchu}/>
			
				</div>	
			</div>		
			<div className="Cbox-right">
				<div className="Cbuttom-top">
					<li className="Cbuttom-top-li">
					<span className="Cbuttom-tupian iconfont icon-tubiao-"></span>
					<h4 className="Cbuttom-h4">我的桌面</h4>	
					</li>
				</div>
		<div className="gundong">
		<Route exact path="/shouye/shang" component={Shouye}/>
		<Route exact path="/shouye/System" component={Shouye}/>
		<Route exact path="/shouye/shang/Goodslist" component={Goodslist}/>
		<Route exact path="/shouye/shang/Invoice" component={Invoice}/>
		
		{/* <Shouye/>	 */}
		</div>		
				</div>		
			</div>	
			</div>
		);
	}
}

export default Buttom;