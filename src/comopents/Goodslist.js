import React, { Component } from 'react';
import '../styles/Invoice.css'
import 'element-theme-default';
import { Button, DatePicker, Select, Input, Table } from 'element-react';


import { goodslistadd,chaxun1} from "../pages/Axios"
import "../styles/Goodslist.css"
import Glisttable from "../comopents/Glisttable"
class Goodslist extends React.Component {
    constructor(props) {
        super(props);
        this.child = null;
        this.state = {
            options: [{
                value: '选项1',
                label: '已发货'
            }, {
                value: '选项2',
                label: '退货'
            }, {
                value: '选项3',
                label: '正常'
            }],
            value: '',
            isshow:'none',
            add:{
                // num:"12",
                // goodsname:"",
                // goodsnum:"",
                // goodsprice:"",
                // area: "✔",
				// dong: "✔",
                // goodstime:"",
                // goodskucun:"",
            
            },
                cha:"" 
        };

    }
    add=()=>{
        this.setState({ 
            isshow:"block"
        })
   }

   close=()=>{
       this.setState({ isshow:"none"}) 
   }
  

      changeVal=(e)=>{
    this.setState({add:{...this.state.add,[e.target.name]:e.target.value}
      
    })
        }

    chaxun=(value)=>{
        console.log("value",value)
        chaxun1(value).then(res=>{
            console.log(res);
        })



          this.setState({
              cha:value
          })  
    }

baocun1=(data)=>{
        this.setState({
            isshow:"none"
        },()=>{
            // this.child.addData(data)
            goodslistadd(data).then(res => {
                console.log(res)
                // this.setState({
                //     list:res
                // })
            })

        })
}

listTable=(ref)=>{
    this.child=ref
}

// http://64rb5j.natappfree.cc
// 商品列表页面：分页查询：products get请求
// 根据id删除 ：delProduct post请求
//  根据商品名称查找：product post请求  
// 增加商品：addProduct  post请求 ++
//  修改商品：updateProduct post请求







    render() {
        return (
            <div className="big-box">
                {/* 导航 */}
                <div className="flex-box">
                    <div className="bbox-left">
                        <span>首页</span>/<span>商品管理</span>/<span>商品列表</span>
                    </div>

                    <div className="bbox-right">
                        {/* <i className="el-icon-loading"></i> */}
                        <img src="../assets/sx.png" />
                    </div>
                </div>
                <div className="inp">
                    <div className="inpu">
                        <input type="text" placeholder="请输入发货单流水号" />
                        <input type="text" placeholder="请输入订单号" />
                        <input type="text" ref="dom"placeholder="请输入查询内容" />

                        <Select value={this.state.value} placeholder="发货单状态">
                            {
                                this.state.options.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                })
                            }
                        </Select>
                        <Button type="primary" icon="search" onClick={()=>this.chaxun(this.refs.dom.value)}></Button>
                    </div>
                    <div className="btn">
                        <Button type="primary" icon="delete">批量删除</Button>
                        <Button type="primary" icon="add" onClick={()=>this.add()}>添加</Button>
                    </div>
                </div>
                <div className="table">
                    <Glisttable onRef={this.listTable} cha={this.state.cha} />
                </div>

            
            {/* 弹出框，用来添加 */}

            <div className="xiugaikuang" style={{display:this.state.isshow}}>
               <div className="xiugaitop">
                 <span>添加商品</span>
                 <i onClick={this.close}>×</i>  
                </div>             
            <div className="huadong">
              <div className="xiugailist">
                 <li>基本输入</li> 
                 <li>其他信息</li> 
                 <li>详细描述</li> 
                </div>         
                <div className="listnum">
			    <p>编号</p>
			    <input type="text" name="num" placeholder="请输入商品编号" value={this.state.add.num} onChange={(e)=>this.changeVal(e)}/>
			    </div>  
                <div className="listname">
			    <p>商品名称</p>
			    <input type="text"  name="name" placeholder="请输入商品名称"  value={this.state.add.name} onChange={(e)=>this.changeVal(e)}/>
			    </div> 
                {/* <div className="listhaoma">
			    <p>货号</p>
			    <input type="text"  name="goodsnum" placeholder="请输入货号"  value={this.state.add.goodsnum}  onChange={(e)=>this.changeVal(e)}/>
			    </div>  */}
                <div className="listprice">
			    <p>价格</p>
			    <input type="text" name="price" placeholder="请输入商品价格" value={this.state.add.price}  onChange={(e)=>this.changeVal(e)}/>
			    </div> 
                {/* <div className="listtime">
			    <p>上架时间</p>
			    <input type="date" name="time" placeholder="请输入上架时间" value={this.state.add.goodstime}  onChange={(e)=>this.changeVal(e)}/>
			    </div>  */}
                <div className="listkucun">
			    <p>库存</p>
			    <input type="text"  name="stock" placeholder="请输入库存数量"  value={this.state.add.stock}  onChange={(e)=>this.changeVal(e)}/>
			    </div> 
               
			<button className="baocun" onClick={() =>this.baocun1(this.state.add)}>保存</button>
                     
            
        </div>                     
            </div>
            {/* 弹出框结束 */}
            </div>
        );
    }
}

export default Goodslist;