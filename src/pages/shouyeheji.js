import React from "react";
import Buttom from  './Buttom'
import Ctop from "../comopents/Ctop"
import {  BrowserRouter,Route } from "react-router-dom";

function Shou() {
  return (
    <div className="App">
        <Ctop/>
        <Buttom/>
        
    </div>
  );
}

export default Shou;
