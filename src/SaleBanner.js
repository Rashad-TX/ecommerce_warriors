import React, {Component} from "react";
import Countdown from "./Countdown";

class SaleBanner extends Component{

    

    render(props){
        return(
            <>
            <div className ="banner-container">
<Countdown/>
<p className = "banner-disc">50% OFF SITEWIDE</p>
<p className ="banner-text">USE CODE: <span className = "discount-code">KUMINGA </span></p>
            </div>
            </>
        )
    }
}

export default SaleBanner;