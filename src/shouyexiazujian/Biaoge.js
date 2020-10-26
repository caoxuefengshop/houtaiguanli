import React, { Component } from 'react'
import "../shouyexiazujian/Biaoge.css"
export default class Biaoge extends Component {
	render() {
		return (
			<div>
			<table border="1" cellspacing="0" cellpadding="0">
			<tr >
				<th>统计</th>
				<th>待发货订单</th>
				<th>成交订单</th>
				<th>产品库</th>
				<th>用户</th>
				<th>管理员</th>
			</tr>	
			<tr>
				<td>总数</td>
				<td>1</td>
				<td>2</td>
				<td>3</td>
				<td>4</td>
				<td>5</td>
			</tr>
			<tr>
				<td>今日</td>
				<td>22</td>
				<td>33</td>
				<td>44</td>
				<td>55</td>
				<td>6</td>
			</tr>
			<tr>
				<td>昨日</td>
				<td>12</td>
				<td>100</td>
				<td>66</td>
				<td>89</td>
				<td>90</td>
			</tr>
			<tr>
				<td>本周</td>
				<td>878</td>
				<td>56</td>
				<td>456</td>
				<td>456</td>
				<td>876</td>
			</tr>
			<tr>
				<td>本月</td>
				<td>123</td>
				<td>343</td>
				<td>55</td>
				<td>76</td>
				<td>87</td>
			</tr>
			</table>		
			</div>
		)
	}
}
