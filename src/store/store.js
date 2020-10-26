// // import { observable, action, toJS } from "mobx";

// // class State {
// //   //控制模态框的开闭
// //   @observable startStopOnOff=false
// // }

// // export default new State()

// import { createStore,combineReducers,applyMiddleware } from "redux";
// import state from "./state";
// import reducer from "./reducer";

// let store = createStore(state,reducer);
// export default store;

// // applyMiddleware(thunk)

// // import {createStore,applyMiddleware} from "redux";
// // import thunk from "redux-thunk";
// // import state from "./state";
// // import reducer from "./reducer";

// // // createStore:创建仓库
// // // 参数：
// // // state:仓库存放的数据
// // // reducer: 对仓库（数据）的操作。
// // // applyMiddkeware(thunk)安装中间件，改装增强redux函数，让dispatch能接收一个函数作为参数
// // let store = createStore(reducer,state,applyMiddleware(thunk));

// // export default store;
