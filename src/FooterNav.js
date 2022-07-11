import React,{Component} from "react";
import {Link} from 'react-router-dom';

class FooterNav extends Component{
    render(){
        return(
           <>
           <footer>
<div className="container-fluid footer-cnt">
    <div className="row">
        <div className="col-lg-3">
        <p className ="footer-hdr">Customer Service</p>
        <Link to="/contactus"><p>FAQ</p></Link>
        <Link to="/contactus"><p>Contact Us</p></Link>
    </div>
    <div className="col-lg-3">
        <p className ="footer-hdr">Worry Free Shopping</p>
        <Link to="/contactus"><p>Shipping Rates</p></Link>
        <Link to="/contactus"><p>Return Policy</p></Link>
    </div>
    <div className="col-lg-3">
        <p className ="footer-hdr">Information</p>
        <Link to="/aboutus"><p>About Us</p></Link>
        </div>
        <div className="col-lg-3">
        <p>Stay updated on sales and new products!</p>
        <Link to="/signup"><button className ="footer-btn">SIGN UP & SAVE 25%</button></Link>
        
        </div>
    </div>
</div>
           
           
           </footer>
           </> 
        )
    }
}

export default FooterNav;