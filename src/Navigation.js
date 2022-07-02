import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/images/logo.png";
import{faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Women</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Jerseys</a>
        </li>
               <li className="nav-item">
          <a className="nav-link" href="#">Hats</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accessories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Collectables</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">New Arrivals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Top Produts</a>
        </li>
            
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <li className= "cart-li">
        <a className= "cart-link" href="#"> <FontAwesomeIcon icon={faShoppingCart}/></a>
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

