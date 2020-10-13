import React, { Component } from 'react';
import {Dropdown} from "element-react";
import {start} from "element-react";
import "element-theme-default"
class Xiala extends Component {
	render() {
		return (
		  <Dropdown menu={(
			<Dropdown.Menu >
			  <Dropdown.Item>个人信息</Dropdown.Item>
			  <Dropdown.Item>切换账户</Dropdown.Item>
			  <Dropdown.Item>退出</Dropdown.Item>
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