import React,{Component} from "react";
import HeroImg from "./assets/images/hero.png";

class Hero extends Component {
    render(){
        return(
            <>
<section className="bgimage">
  <div className="container-fluid hero-sec">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                
        <p><a href="#"><button className ="hero-btn">SHOP NOW</button></a></p>
      </div>
    </div>
  </div>
</section>
            </>
        )
    }
}

export default Hero;