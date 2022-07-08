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
<div className = "col-md-6">
   <Link to="/new"> <img src = {newpic} alt="sweater" className="newPic" width = "650px" height="650px"></img></Link>
</div>
<div className ="col-md-6">
<Link to="/top"><img src = {toppic} alt="sweater" className="topPic" width = "650px" height="650px"></img> </Link>
</div>
</div>
</div>

            </>
        )
    }
}

export default Featured;