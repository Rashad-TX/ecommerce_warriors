import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/images/logo.png";
import{faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'
import "jquery/dist/jquery" 
import "bootstrap/dist/js/bootstrap";



class Navigation extends Component{
    
 
  render(){
        return(<>
            
<div>
<div className="cart-cntr"> 
        <Link className= "cart-link" to="/cart"> <FontAwesomeIcon icon={faShoppingCart} className="nav-cart"/></Link>
            </div>
<nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src = {logo} alt="logo" width = "150rem"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
      <ul className="nav nav-tabs justify-content-center myNav " >
        <li className="nav-item">
          <Link className="nav-link " data-toggle="tab" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " data-toggle="tab" aria-current="page" to="/products">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " data-toggle="tab" aria-current="page" to="/track">Track Order</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " data-toggle="tab"  aria-current="page" to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " data-toggle="tab" aria-current="page" to="/contactus">Contact Us</Link>
        </li>
        
       </ul>
    </div>
  </div>
</nav>
</div>
              </>
        )
    }
}

export default Navigation;

