import React,{Component} from "react";
import jersBanner from "./assets/images/jersbanner.png";
import {Link} from 'react-router-dom'

class JerseyBanner extends Component{
    render(){
        return(
            <>
<div className = "container-fluid">
<div className = "row">
<div className = "col">
   <Link to="/jersey"> <img src = {jersBanner} alt="various-jerseys" className="jersey-banner" width="100%" height="300px"></img></Link>
</div>
</div>
</div>

            </>
        )
    }
}

export default JerseyBanner;