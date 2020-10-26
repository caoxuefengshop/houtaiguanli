import React, { Component } from "react";
import {Layout} from "element-react";
import {Menu} from "element-react";
import {Route,Link} from "react-router-dom";
import "element-theme-default"
import "./Cindex.css"
class Home1 extends Component {
  render() {
    return (
      <Layout.Col span={8}>
      <Menu defaultActive="3" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme="dark">
      <Link to="/shouye/shang">   <Menu.SubMenu index="1" title="首页">
        </Menu.SubMenu></Link>
        <Menu.SubMenu index="2" title="商品管理">
        <Link to="/shouye/shang/Goodslist">     <Menu.Item index="21">商品列表</Menu.Item></Link>
            <Menu.Item index="22">商品品牌</Menu.Item>
            <Menu.Item index="23">商品类型</Menu.Item>
            <Menu.Item index="24">商品回收站</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu index="3" title="促销管理">
            <Menu.Item index="31">团购活动</Menu.Item>
            <Menu.Item index="32">优惠列表</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu index="4" title="订单管理">
            <Menu.Item index="41">订单列表</Menu.Item>

          <Link to="/shouye/shang/Invoice">  <Menu.Item index="42">
            发货单列表</Menu.Item></Link>
            <Menu.Item index="43">退货单列表</Menu.Item>
    
        </Menu.SubMenu>
        
      </Menu>
      </Layout.Col>
    )
  }
  
  onOpen() {
  
  }
  
  onClose() {
  
  }
}

export default Home1;
