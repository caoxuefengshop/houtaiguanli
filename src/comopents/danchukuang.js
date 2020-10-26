import React, { Component } from 'react';
import "../styles/danchukuang.css"
import {Upload } from 'element-react';

import Background from "../assets/123.jpg"
class danchukuang extends Component {
	constructor() {
		super();
		this.state = {
			imageUrl: '',
			data:{}
		}
	}
	goBack(){
		window.history.go(-1);
	}
	handleAvatarScucess(res, file) {
		console.log("handleAvatarScucess",res)
		this.setState({ imageUrl: URL.createObjectURL(file.raw) });
	}
	jiao=()=>{
		this.refs.upload.submit();
		console.log("data",this.state.data)
	}
	on

	changeVal=(e)=>{
	
		this.setState({data:{...this.state.data,[e.target.name]:e.target.value}
		},()=>{
			// console.log("333",this.state.data);
		})
		
	} 
	render() {
		const { imageUrl } = this.state.imageUrl;

		const bg = {
		
			backgroundSize: '100%,100%',
			// background: `url(${require("../assets/123.jpg")})`,
			backgroundImage: `url(${Background})` 

		};
		
		const fileList2 = [
			{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}
		  ]

		return (
			<div>
			<div className="dankuang" style={bg}>
			<div className="dankuang-top">
			<span>个人信息</span>

			<button onClick={()=>this.goBack()}>×</button>
			</div>	
				<div className="touxiang"> 
				{/* <img src={require('../assets/123.jpg')}/> */}
				<Upload
				name="img"
				ref="upload"
				// data={this.state.data}
	
      className="avatar-uploader"
      action="http://c8emrv.natappfree.cc/updateUser"
    //   action="http://10.35.167.193:10000/shangchaun"
	  showFileList={false}
	  autoUpload={false}
      onSuccess={(res, file) => this.handleAvatarScucess(res, file)}
    >
      { imageUrl ? <img src={imageUrl} className="avatar" /> : <i className="el-icon-plus avatar-uploader-icon"></i> }
    </Upload>
 
				<div className="touxiang1">
					<h6>xiyaun</h6>
					<p>这家伙很懒什么也没留下</p>
				</div>
				</div>

			<div className="username">
			<p>用户名:</p>
			<input type="text" name="name" onChange={(e)=>this.changeVal(e)} placeholder="xiyuan"/>
			</div>

			<div className="telnum">
			<p>手机号</p>
			<input type="text" name="tel" onChange={(e)=>this.changeVal(e)} placeholder="手机号"/>
			</div>

			<div className="password">
			<p>密码</p>
			<input type="text" name="pwd" onChange={(e)=>this.changeVal(e)} />
			</div>

			<div className="password1">
			<p>确认密码</p>
			<input type="text"  />
			</div>

			<button className="tijiao" onClick={() =>this.jiao()}>确认</button>
			
			</div>		
			</div>
		);
	}
}

export default danchukuang;