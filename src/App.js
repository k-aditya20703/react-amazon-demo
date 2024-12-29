import React, { useState } from "react";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Test from "./component/pages/Test";
import Fresh from "./component/pages/Fresh";
import All from "./component/pages/All";
import MXplayer from './component/pages/MXplayer';
import Sell from './component/pages/Sell';
import Bestseller from './component/pages/Bestseller';
import Todaydeal from './component/pages/Todaydeal';
import Mobiles from './component/pages/Mobiles';
import Customer from './component/pages/Customer';
import Prime from './component/pages/Prime';
import Electronics from './component/pages/Electronics';
import Home from './component/pages/Home';
import Amazonpay from './component/pages/Amazonpay';
import New from './component/pages/New';
import Fashion from './component/pages/Fashion';
import Car from './component/pages/Car';
import Menu from "./component/pages/Menu";
import Language from "./component/pages/Account";
import Cart from "./component/pages/Cart";
import { cartdata } from "./component/constant/Cartdata";



const App = ()=>{
  const [cCount,setCartCount] = useState(0)
  const cartCount = ()=>{
    setCartCount(cartdata.length)
  }
  return(
    <>
      {/* <Test/> */}
      <Navbar cCount={cCount} />
      <Routes>
        <Route path="/all" element={<All/>}/>
        <Route path="/home" element={<Fresh/>}/>
        <Route path="/mxplayer" element={<MXplayer/>}/>
        <Route path="/sell" element={<Sell/>}/>
        <Route path="/bestseller" element={<Bestseller/>}/>
        <Route path="/today" element={<Todaydeal/>}/>
        <Route path="/mobile" element={<Mobiles cartCount = {cartCount} a={10}/>}/>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/prime" element={<Prime/>}/>
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/amazonpay" element={<Amazonpay/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/fashion" element={<Fashion/>}/>
        <Route path="/car" element={<Car/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/lang" element={<Language/>}/>
        <Route path="/cart" element={<Cart/>}/>
        

      </Routes>
    </>
  )
}

export default App;
