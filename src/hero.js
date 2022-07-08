import React,{Component} from "react";
import {Link} from 'react-router-dom'

class Hero extends Component {
    render(){
        return(
            <>
<section className="bgimage">
  <div className="container-fluid hero-sec">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                
        <p><Link to="/products"><button className ="hero-btn">SHOP NOW</button></Link></p>
      </div>
    </div>
  </div>
</section>
            </>
        )
    }
}

export default Hero;