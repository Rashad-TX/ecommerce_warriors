import React,{Component} from "react";
import sbcurry from "./assets/images/sbcurry.png";
import sbklay from "./assets/images/sbklay.png";
import sbdray from "./assets/images/sbdray.png";
import sbjp from "./assets/images/sbjp.png";

class ShopBy extends Component{
    render(){
        return(
            <>
<div className="container-fluid">
    <div className = "row ">
        <div className = "col-lg-3" >
        <a><img src = {sbcurry} alt="steph photo"/></a>
        </div>
        <div className = "col-lg-3">
        <a><img src = {sbklay} alt="klay photo" /></a>
        </div>
        <div className = "col-lg-3">
        <a><img src = {sbjp} alt="jordan photo" /></a>
        </div>
        <div className = "col-lg-3">
        <a><img src = {sbdray} alt="dray photo" /></a>
        </div>
    </div>
</div>
            </>
        )
    }
}

export default ShopBy;