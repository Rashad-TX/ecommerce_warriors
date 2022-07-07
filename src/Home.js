import React,{Component} from "react";
import Featured from "./Featured";
import JerseyBanner from "./JerseyBanner";
import SaleBanner from "./SaleBanner";
import ShopBy from "./ShopBy";
import Hero from "./hero";


class Home extends Component {
    render(){
        return(
            <>
               <SaleBanner />
                <Hero />
                <Featured />
                <JerseyBanner />
                <ShopBy />
            </>
        )
    }
}

export default Home;