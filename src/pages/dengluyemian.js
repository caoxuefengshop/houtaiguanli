import React, { Component } from 'react';
import "../styles/dengluyemian.css"
// import Background from "../assets/123.jpg"
import Background from "../assets/banner_04.jpg"
import {Link } from "react-router-dom";
import {Login} from "../pages/Axios"
class Dengluyemian extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			data:{
				username:"",
				password:""
			}
		}
	}
	changeVal=(e)=>{
	
		this.setState({data:{...this.state.data,[e.target.name]:e.target.value}
		},()=>{
			console.log("333",this.state.data);
		})
		
	}

	denglu=(values)=>{
		console.log(values)
		Login(
			values
		  ).then(res => {
			this.props.history.push('/shouye');

	}).catch(err=>{
		console.log(err)
	})

		}
	
	render() {
		const bg = {
			width:'100%',
			height:'100%',
			backgroundSize: '100%,100%',
			backgroundImage: `url(${Background})` 
	};

		return (
			<div className="dengluyemian" style={bg}>
			<div className="denglu">
			<div className="denglukuang">
			<div className="dengluguanli">登录管理 </div>
			<input type="text" placeholder="用户名" name="username" className="yonghuming" onChange={(e)=>this.changeVal(e)}/>
			<input type="password" placeholder="密码" className="mima" name="password" onChange={(e)=>this.changeVal(e)}/>
		
		<input type="button" value="登录" className="anniu" onClick={()=>this.denglu(this.state.data)}/>

			
			</div>	
			</div>		
			</div>
		);
	}
}

export default Dengluyemian;