import React,{Component} from "react";
import newpic from "./assets/images/new.png";
import toppic from "./assets/images/top.png";
import {Link} from 'react-router-dom'

class Featured extends Component{
    render(){
        return(
            <>
<div className = "container">
<div className = "row gx-5">
<div className = "col-lg-6">
   <Link to="/new-arrivals"> <img src = {newpic} alt="sweater" className="newPic img-fluid" width = "650px" height="650px"></img></Link>
</div>
<div className ="col-lg-6">
<Link to="/top-products"><img src = {toppic} alt="sweater" className="topPic img-fluid" width = "650px" height="650px"></img> </Link>
</div>
</div>
</div>

            </>
        )
    }
}

export default Featured;