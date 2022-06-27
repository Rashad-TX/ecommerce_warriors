import React,{Component} from "react";
import HeroImg from "./assets/images/hero.png";

class Hero extends Component {
    render(){
        return(
            <>
<div className ="hero-container">
    <img src={HeroImg} alt="hero-img" width = "1900px" height= "500px" />
</div>
            </>
        )
    }
}

export default Hero;