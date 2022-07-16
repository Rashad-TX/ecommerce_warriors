import React,{Component} from "react";
import sbcurry from "./assets/images/sbcurry.png";
import sbklay from "./assets/images/sbklay.png";
import sbdray from "./assets/images/sbdray.png";
import sbjp from "./assets/images/sbjp.png";
import {Link} from 'react-router-dom';
import Products from "./Products";

class ShopBy extends Component{
    render(){

        return(
            <>
<div className="container-fluid">
    <div className = "row ">
        <div className = "col-lg-3" >
        <Link to="/curry" ><img src = {sbcurry} alt="steph photo" className="img-fluid"/> </Link>
        </div>
        <div className = " col-lg-3">
        <Link to="/klay"><img src = {sbklay} alt="klay photo" className="img-fluid" /></Link>
        </div>
        <div className = " col-lg-3">
        <Link to="/poole"><img src = {sbjp} alt="jordan photo" className="img-fluid" /></Link>
        </div>
        <div className = "col-lg-3">
        <Link to="/draymond"><img src = {sbdray} alt="dray photo" className="img-fluid" /></Link>
        </div>
    </div>
</div>

            </>
        )
    }
}

export default ShopBy;