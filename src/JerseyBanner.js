import React,{Component} from "react";
import jersBanner from "./assets/images/jersbanner.png";


class JerseyBanner extends Component{
    render(){
        return(
            <>
<div className = "container-fluid">
<div className = "row">
<div className = "col">
   <a href="#"> <img src = {jersBanner} alt="various-jerseys" className="jersey-banner" width="100%" height="300px"></img></a>
</div>
</div>
</div>

            </>
        )
    }
}

export default JerseyBanner;