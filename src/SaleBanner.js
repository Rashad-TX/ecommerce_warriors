import React, {Component} from "react";

class SaleBanner extends Component{
    render(){
        return(
            <>
            <div className ="banner-container">
<p className ="banner-text"> ENDS IN: <span className = "time-clock">00:00:00</span></p>
<p className = "banner-disc">50% OFF SITEWIDE</p>
<p className ="banner-text">USE CODE: <span className = "discount-code">KUMINGA </span></p>
            </div>
            </>
        )
    }
}

export default SaleBanner;