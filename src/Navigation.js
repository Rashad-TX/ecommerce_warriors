import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/images/logo.png";
import{faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'


class Navigation extends Component{
    
 
  render(){
        return(<>
            
<div>
<nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src = {logo} alt="logo" width = "150rem"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav justify-content-center myNav " >
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/men">Men</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/women">Women</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/jersey">Jerseys</a>
        </li>
               <li className="nav-item">
          <a className="nav-link" href="/hat">Hats</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/accessories">Accessories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/collectable">Collectables</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/new">New Arrivals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/top">Top Produts</a>
        </li>
            
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <li className= "cart-li">
        <a className= "cart-link" href="/cart"> <FontAwesomeIcon icon={faShoppingCart}/></a>
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

