// import React from 'react';
// import { Row, Col, Modal, Tooltip } from 'antd';
// import moment from "moment";
// import $ from "jquery";
// import $state from './state';
// import { observer } from 'mobx-react';


// let list = [
//   { content: '【综合】前7月房企业绩', date: '2019/02' },
//   { content: '【房企】前6月房企业绩', date: '2019/01' },
//   { content: '【综合】前5月房企业绩', date: '2019/01' },
//   { content: '【销售】前4月房企业绩', date: '2019/01' },
//   { content: '【综合】前3月房企百强销售业绩', date: '2019/01' },
//   { content: '【综合】前3月房企百强销售业绩xxxxxxxxxxxxx', date: '2019/01' },
//   { content: '【综合】前3月房企百强销售业绩ccccc', date: '2019/01' },
// ]

// let box;
// let con1;
// let con2;
// let speed;
// let i;
// @observer
// class Gundondpaihang extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }
//   componentDidMount() {
//     //在实际项目中用$可能会直接拿不到
//     box = this.con;
//     con1 = this.con1;
//     con2 = this.con2;
//     speed = 50;

//     i = setInterval(this.scroll, speed);
//     console.log(i, 'ss');

//   }
//   scroll = () => {
//     if (box.scrollTop + 140 >= con1.scrollHeight) {
//       con2.innerHTML = con1.innerHTML;
//       box.scrollTop = 0;
//       con2.innerHTML = '';
//     } else {
//       box.scrollTop++
//     }
//   }
//   //离开某一条新闻--继续滚动
//   roll = () => {

//     if (!$state.startStopOnOff) {
//       i = setInterval(this.scroll, speed);
//     }
//   }
//   stop = () => {
//     clearInterval(i);
//   }

//   //点击某一条新闻，打开模态框
//   showModal = (i) => {
//     $state.startStopOnOff = true

//     //如果一个页面中的外层又套了一层top盒子的话，而且页面很长，还出现了滚动条，就需要按照下面的方式处理一下，不然打开模态框，只有当前视野是模态框，滚动鼠标，下面就没有模态框覆盖。
//     $(document.body).css({
//       height: '100%', 'overflow': 'hidden'
//     })
//     window.onscroll = null;//不出现滚动条
//     document.body.className = 'bodyAct'
//     console.log(document.body);

//   }
//   handleOk = () => {
//     $state.startStopOnOff = false

//     i = setInterval(this.scroll, speed)
//   }
//   //关闭模态框
//   handleCancel = () => {
//     $state.startStopOnOff = false
//     i = setInterval(this.scroll, speed)
//     $(document.body).css({
//       height: 'auto', 'overflow': 'auto'
//     })
//     document.body.className = ''
//   }
//   render() {
//     return (
//       <div className='news'>

//         <div className='macro' ref={(c) => { this.con = c }}>

//           <ul id='con1' ref={(c) => { this.con1 = c }} onMouseOut={this.roll} onMouseOver={this.stop} >
//             {list.map((item, index) =>
//               <li key={index} onClick={() => {
//                 this.showModal(index)
//               }
//               }>
//                 <a >
//                   <span className='policies-line'></span>
//                   <Row>
//                     <Col span={19}>
//                       <Tooltip placement="topLeft" title={item.content}>
//                         <span className='content'>{item.content}</span>
//                       </Tooltip>
//                     </Col>
//                     <Col span={4}><span className='yearMonth'>{moment(item.date).format('YY-MM')}</span></Col>
//                   </Row>
//                 </a>
//               </li>
//             )}
//           </ul >
//           <ul id='con2' ref={(c) => { this.con2 = c }}></ul>

//         </div>
//         {/* 模态框 */}
//         <div>
//         {
//             list.map((item, index) => {

//               return <Modal
//                 maskStyle={{ background: 'rgba(0 ,0,0,0.1 )' }}
//                 visible={$state.startStopOnOff}
//                 footer={null}
//                 onOk={this.handleOk}
//                 onCancel={this.handleCancel}
//                 className='model'
//                 title={null}
//                 width={400}
//                 key={index}
//               >
//                 <h1 style={{ fontWeight: 700 }}>{item.content}</h1>
//                 <div className='model-body'>
//                   <span>{item.date}</span>
//                 </div>
//               </Modal>
//             })
//           }
//             </div>
//       </div>
//     )
//   }
// }
// export default Gundondpaihang