import React from "react";
import "./App.css";
import {  BrowserRouter,Route } from "react-router-dom";
import Shou from "./pages/shouyeheji"
import Denglu from "./pages/dengluyemian"
// import {observer} from "mobx-react"
import {observer} from "mobx-react"
import Loading from "./comopents/Loading"
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter >
//       <Route path="/shouye" component={Shou}/>
//       <Route  exact={true} path="/" component={Denglu}/>
//       </BrowserRouter>
    
//     </div>
//   );
// }


@observer
class App extends React.Component {

  
	// test(){
	// 	this.props.appStore.increment(2)
	// }
  render() {
    return (
     
      <div className="App">
         {/* <input type="button" value="测试" onClick={()=>{this.test()}}/>	
		<p>{this.props.appStore.count}</p> */}
    <Loading/>
      <BrowserRouter >
<switch>
       <Route  path="/shouye" component={Shou}/>
      <Route exact={true}  path="/" component={Denglu}/>
</switch>
      </BrowserRouter>
     </div>
    );
  }
}




export default App;
