import React, { Component } from "react";
import { Consumer } from "../utils/mycontet";
import {Layout} from "element-react";
import {Menu} from "element-react";
import "element-theme-default"
import "./Cindex.css"
class Home1 extends Component {
  render() {
    return (
      <Layout.Col span={8}>
      <Menu defaultActive="3" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme="dark">
        <Menu.SubMenu index="1" title="首页">
        </Menu.SubMenu>
        <Menu.SubMenu index="2" title="商品管理">
            <Menu.Item index="21">选项1</Menu.Item>
            <Menu.Item index="22">选项2</Menu.Item>
            <Menu.Item index="23">选项2</Menu.Item>
            <Menu.Item index="24">选项2</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu index="3" title="促销管理">
            <Menu.Item index="31">选项1</Menu.Item>
            <Menu.Item index="32">选项2</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu index="4" title="促销管理">
            <Menu.Item index="41">选项1</Menu.Item>
            <Menu.Item index="42">选项2</Menu.Item>
            <Menu.Item index="43">选项2</Menu.Item>
    
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
