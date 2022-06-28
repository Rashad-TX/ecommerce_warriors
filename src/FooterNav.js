import React,{Component} from "react";

class FooterNav extends Component{
    render(){
        return(
           <>
           <footer>
<div className="container-fluid footer-cnt">
    <div className="row">
        <div className="col-lg-3">
        <p className ="footer-hdr">Customer Service</p>
        <p>FAQ</p>
        <p>Size Chart</p>
    </div>
    <div className="col-lg-3">
        <p className ="footer-hdr">Worry Free Shopping</p>
        <p>Shipping Rates</p>
        <p>Return Policy</p>
    </div>
    <div className="col-lg-3">
        <p className ="footer-hdr">Information</p>
        <p>About Us</p>
        </div>
        <div className="col-lg-3">
        <p>Stay updated on sales and new products!</p>
        <button className ="footer-btn">SIGN UP & SAVE 25%</button>
        
        </div>
    </div>
</div>
           
           
           </footer>
           </> 
        )
    }
}

export default FooterNav;