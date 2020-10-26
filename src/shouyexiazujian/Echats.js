import React, { Component } from 'react'
import {orderStatus} from "../pages/Axios"
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
require('echarts/lib/component/title');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/legend');
require('echarts/lib/component/toolbox');



export default class echats extends Component {
	constructor(props) {
		super(props);
		this.state={
			data:[]
		};
	}
	componentDidMount(){
		orderStatus().then(res=>{
			console.log("re",res.data.data)
			this.setState({
				data:res
			})
		})





		var myChart = echarts.init(document.getElementById('main1'));
		var option = {
			title: {
				text: '订单信息图',
				// subtext: '纯属虚构',
				left: 'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: '{a} <br/>{b} : {c} ({d}%)'
			},
			legend: {
				left: 'center',
				top: 'bottom',
				data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
			},
			toolbox: {
				show: true,
				feature: {
					mark: {show: true},
					dataView: {show: true, readOnly: false},
					magicType: {
						show: true,
						type: ['pie', 'funnel']
					},
					restore: {show: true},
					saveAsImage: {show: true}
				}
			},
			series: [
				
				{
					name: '面积模式',
					type: 'pie',
					radius: [30, 110],
					center: ['55%', '50%'],
					roseType: 'area',
					data: [
						{value:20, name: 'rose1',
						itemStyle: {
							color: '#33bde6'
						}
					
					},
						{value: 5, name: 'rose2',
						itemStyle: {
							color: '#5ce4bd'
						}
					
					},
						{value: 15, name: 'rose3',
						itemStyle: {
							color: '#f7d951'
						}
					
					},
						{value: 25, name: 'rose4',
						itemStyle: {
							color: '#57d6f7'
						}
					
					},
						{value: 20, name: 'rose5',
						itemStyle: {
							color: '#aa7aff'
						}
					
					},
						// {value: 35, name: 'rose6'},   orderStatus
						// {value: 30, name: 'rose7'},
						// {value: 40, name: 'rose8'}
					]
				}
			]
		};
		

		myChart.setOption(option);

	}
	render() {
		return (
			<div>
				<div id="main1" style={{ width:400, height:350,textAlign: 'center'}}></div>
			</div>
		)
	  }



}
