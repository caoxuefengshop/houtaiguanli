import React, { Component } from 'react';
import {Dropdown} from "element-react";
// import {start} from "element-react";
import {NavLink } from "react-router-dom";
import "element-theme-default"
class Xiala extends Component {
	render() {
		return (
		  <Dropdown menu={(
			<Dropdown.Menu >
			<NavLink to="/shouye/System/danchu"><Dropdown.Item>个人信息</Dropdown.Item></NavLink>


		<NavLink to="/" activeStyle={{ backgroundColor:"red"}} >	  <Dropdown.Item>切换账户</Dropdown.Item></NavLink>
		<NavLink to="/">	   <Dropdown.Item>退出</Dropdown.Item></NavLink>
			</Dropdown.Menu>
			)}
		  >
			<span className="el-dropdown-link" style={{color:"#fff"}} menuAlign="start">
			  用户名<i className="el-icon-caret-bottom el-icon--right" menuAlign="start"></i>
			</span>
		  </Dropdown>
		)
	  }
}

export default Xiala;