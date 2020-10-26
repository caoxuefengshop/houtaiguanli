import React, { Component } from "react";
// import { Consumer } from "../utils/mycontet";
import {Layout} from "element-react";
import {Menu} from "element-react";
import "element-theme-default"
import "./Cindex.css"


class System extends Component {
  render() {
    return (
      <Layout.Col span={8}>
      <Menu defaultActive="3" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme="dark">
        <Menu.SubMenu index="1" title="首页">
        </Menu.SubMenu>
        <Menu.SubMenu index="2" title="文章管理">
            <Menu.Item index="21">文章类型列表</Menu.Item>
            <Menu.Item index="22">文章列表</Menu.Item>
            
        </Menu.SubMenu>
        <Menu.SubMenu index="3" title="公告管理">
            <Menu.Item index="31">公告类型</Menu.Item>
            <Menu.Item index="32">公告列表</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu index="4" title="栏目管理">
            <Menu.Item index="41">栏目列表</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu index="5" title="管理员管理">
            <Menu.Item index="51">管理员列表</Menu.Item>
            <Menu.Item index="52">校色管理</Menu.Item>
            <Menu.Item index="52">权限分类</Menu.Item>
            <Menu.Item index="52">权限管理</Menu.Item>
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

export default System;
