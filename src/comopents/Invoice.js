import React, { Component } from 'react';
import '../styles/Invoice.css'
import 'element-theme-default';
import { Button, DatePicker, Select, Input, Table } from 'element-react';
import InvoiceTable from './InvoiceTable'
class invoice extends React.Component {
    constructor(props) {
        super(props);

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
            value: ''
        };

    }
    render() {
        return (
            <div className="big-box">
                {/* 导航 */}
                <div className="flex-box">
                    <div className="bbox-left">
                        <span>首页</span>/<span>订单</span>/<span>发货页列表</span>
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
                        <input type="text" placeholder="请输入收货人" />
                        <Select value={this.state.value} placeholder="发货单状态">
                            {
                                this.state.options.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                })
                            }
                        </Select>
                        <Button type="primary" icon="search"></Button>
                    </div>
                    <div className="btn">
                        <Button type="primary" icon="delete">批量删除</Button>
                    </div>
                </div>
                <div className="table">
                    <InvoiceTable />
                </div>
            </div>
        );
    }
}

export default invoice;