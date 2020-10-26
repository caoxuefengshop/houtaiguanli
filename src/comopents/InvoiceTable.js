import React from 'react';
import { Button, MessageBox, Message, Pagination } from 'element-react';

import '../styles/Community.css'

export default class InvoiceTable extends React.Component {
	constructor(props) {
		super();
		this.state = {
			bool: false,
			list: [
				{
					id: "2017009171822298053",
					num: "6346132436530324",
					name: "2020-7-6 21:25:19",
					location: "admin",
					area: "2020-7-6 21:25:30",
					dong: "上海供货商",
					hu: "未发货",
					green: "admin",
				},
				{
					id: "2017009171822298053",
					num: "6346132436530324",
					name: "2020-7-6 21:25:19",
					location: "admin",
					area: "2020-7-6 21:25:30",
					dong: "上海供货商",
					hu: "未发货",
					green: "admin",
				},
				{
					id: "2017009171822298053",
					num: "6346132436530324",
					name: "2020-7-6 21:25:19",
					location: "admin",
					area: "2020-7-6 21:25:30",
					dong: "上海供货商",
					hu: "未发货",
					green: "admin",
				},
				{
					id: "2017009171822298053",
					num: "6346132436530324",
					name: "2020-7-6 21:25:19",
					location: "admin",
					area: "2020-7-6 21:25:30",
					dong: "上海供货商",
					hu: "未发货",
					green: "admin",
				},
				{
					id: "2017009171822298053",
					num: "6346132436530324",
					name: "2020-7-6 21:25:19",
					location: "admin",
					area: "2020-7-6 21:25:30",
					dong: "上海供货商",
					hu: "未发货",
					green: "admin",
				},
				{
					id: "2017009171822298053",
					num: "6346132436530324",
					name: "2020-7-6 21:25:19",
					location: "admin",
					area: "2020-7-6 21:25:30",
					dong: "上海供货商",
					hu: "未发货",
					green: "admin",
				}
			]
		};
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

	del(idx) {
		MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
			type: 'warning'
		}).then(() => {
			var lt = [...this.state.list];
			lt.splice(idx, 1);
			this.setState({
				list: lt
			});
			Message({
				type: 'success',
				message: '删除成功!'
			});
		}).catch(() => {
			Message({
				type: 'info',
				message: '已取消删除'
			});
		});
	}

	xianshi() {
		return this.state.list.map((item, index) => {
			return (
				<tr key={index}>
					<td><input type="checkbox" /></td>
					<td>{item.id}</td>
					<td>{item.num}</td>
					<td>{item.name}</td>
					<td>{item.location}</td>
					<td>{item.area}</td>
					<td>{item.dong}</td>
					<td>{item.hu}</td>
					<td>{item.green}</td>
					<td>
						<i className="el-icon-edit"></i>
						<i className="el-icon-delete" onClick={() => this.del(index)}></i>
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
							<th>发货单流水号</th>
							<th>订单号</th>
							<th>下单时间</th>
							<th>收货人</th>
							<th>发货时间</th>
							<th>供货商</th>
							<th>发货状态</th>
							<th>操作人</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						{this.xianshi()}
					</tbody>
				</table>
				{this.pageShow()}
			</div>
		)
	}
}
