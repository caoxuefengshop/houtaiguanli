import React from 'react';
import { Button, MessageBox, Message, Pagination } from 'element-react';

import { products,shanchu,updateProduct} from "../pages/Axios"

import '../styles/Community.css'
import "../styles/Goodslist.css"
export default class Glisttable extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bool:'false',
			nn:2,
			nu:1,
			list: [
				// {	
					
				// 	num: "1",
				// 	goodsname: "华为P30",
				// 	goodsnum: "hw168",
				// 	goodsprice: "480",
				// 	area: "✔",
				// 	dong: "✔",
				// 	goodstime: "2018-01-01 11:11:42",
				// 	goodskucun: "600",
				// },
				// {	
					
				
			
			
			],
			show:'none',
			data:{
			},
			id:"",

		};
		
	}
	componentDidMount(){
		this.props.onRef(this);
			console.log(this.state.nu)
            products(this.state.nu).then(res => {
                console.log(res.data.data)
                this.setState({
                    list:res.data.data
                })
            })
   


	}
	componentWillReceiveProps(nextProps){
	return 	this.state.list.map((item)=>{
				if(item.goodsname == nextProps.cha){
					let a=this.state.list;
					// console.log("2",item.goodsname);
					a.splice(0,a.length,item);
					this.setState({
						list:a
					},()=>{
						console.log(this.state.list)
					})
				}else{
					// return ""
					console.log("22")
				}
		})		
	}



	

	addData(data){
		// let a = this.state.list
		// a.push(data);
		// this.setState({list: a});
	
	}

	jinyong() {
		MessageBox.msgbox({
			title: '信息',
			message: '确认要停用吗',
			showCancelButton: true
		}).then(action => {
			this.setState({
				bool: true
			})
			Message({
				type: 'info',
				message: 'action: ' + action
			});
		})
	}
	
	xiugai(num){
		
		this.setState({
			show:"block"
		},()=>{
			this.state.list.map((item,index)=>{
				if(item.num == num){
					this.setState({
						data:item,
						id:index		
					})
				}
				

			})
	
		})
	
	}

	

	baocun=(data)=>{
		console.log("data",data)
		this.setState({
			show:"none"
		},()=>{		
			// let arr = [...this.state.list];
			// arr.forEach((item,index) =>{
			// 	if(item.goodsid==idx){
			// 		arr.splice(index,1)
			// 	}
			// });
			// this.setState({
			// 	data:{},
			// 	list: arr
			// })	
		
			updateProduct(data).then(res=>{
				console.log(res);
			})	
			


		})
	}
	
	
	
	changeVal=(e)=>{
	
		this.setState({data:{...this.state.data,[e.target.name]:e.target.value}
		},()=>{
			// console.log("333",this.state.data);
		})
		
	}



	close=()=>{
		this.setState({show:"none"}) 
	}

	del(idx) {
		console.log("idx",idx)
		MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
			type: 'warning'
		}).then(() => {
			shanchu(idx).then((res) => {
				// console.log("删除",res)
			var lt = [...this.state.list];
			lt.forEach((item,index)=>{
				if(item.goodsid==idx){
					lt.splice(index, 1);
				}
			})
	
			this.setState({
				list: lt
			});
			},()=>{
				

				Message({
					type: 'success',
					message: '删除成功!'
				});
			})

			// var lt = [...this.state.list];
			// lt.splice(idx, 1);
			// this.setState({
			// 	list: lt


			// });
			
		}).catch(() => {
			Message({
				type: 'info',
				message: '已取消删除'
			});
		});
	}




			
	xianshi=()=>{
		// console.log("来",this.state.list);
		return this.state.list.map((item,index) => {
			return (
				<tr key={index}>
					<td><input type="checkbox" /></td>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.num}</td>
					<td>{item.price}</td>

					<td>✔</td>
					<td>✔</td>
					<td>{item.time}</td>
					<td>{item.stock}</td>
					<td>
				
						<i className="el-icon-edit" onClick={()=>this.xiugai(item.num)}></i>
						
						<i className="el-icon-delete" onClick={() => this.del(item.id)}></i>
					</td>
				</tr>
			)
		})
	}

	pageShow() {
		return (
			<div className="first">
				<Pagination layout="prev, pager, next" total={30} />
			</div>
		)
	}

	render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th><input type="checkbox" /></th>
							<th>编号</th>
							<th>商品名称</th>
							<th>货号</th>
							<th>价格</th>
							<th>上架</th>
							<th>新品</th>				
							<th>发货状态</th>
							<th>库存</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						{this.xianshi()}
					</tbody>
				</table>
				{this.pageShow()}
				 {/* 弹出框，用来修改*/}
				 <div className="xiugaikuang" style={{display:this.state.show}}>
               <div className="xiugaitop">
                 <span>修改商品</span>
                 <i onClick={this.close}>×</i>  
                </div>             
            <div className="huadong">
              <div className="xiugailist">
                 <li>基本输入</li> 
                 <li>其他信息</li> 
                 <li>详细描述</li> 
                </div>              
                {/* <div className="listnum">
			    <p>编号</p>
			    <input type="text" name="num" value={this.state.data.num} placeholder="请输入商品编号" onChange={(e)=>this.changeVal(e)} />
			    </div>   */}
				<div className="listtime">
			    <p>id号</p>
			    <input type="text" name="id" value={this.state.data.id} placeholder="请输入上架时间" onChange={(e)=>this.changeVal(e)}/>
			    </div> 
				 <div className="listhaoma">
			    <p>货号</p>
			    <input type="text" name="num" value={this.state.data.num} placeholder="请输入货号" onChange={(e)=>this.changeVal(e)}/>
			    </div> 
                <div className="listname">
			    <p>商品名称</p>
			    <input type="text" name="name"  value={this.state.data.name} placeholder="请输入商品名称" onChange={(e)=>this.changeVal(e)}/>
			    </div> 
               
                <div className="listprice">
			    <p>价格</p>
			    <input type="text" name="price" value={this.state.data.price} placeholder="请输入商品价格" onChange={(e)=>this.changeVal(e)}/>
			    </div> 
                
                <div className="listkucun">
			    <p>库存</p>
			    <input type="text"  name="stock" value={this.state.data.stock} placeholder="请输入库存数量" onChange={(e)=>this.changeVal(e)}/>
			    </div> 
               
			<button className="baocun" onClick={() =>this.baocun(this.state.data)}>保存</button>
                     
            
        </div>                     
            </div>
            {/* 弹出框结束 */}
			</div>
	
		   



		)
	}
}
