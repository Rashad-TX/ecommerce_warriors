import React from "react";
import Navigation from "./Navigation";
import SaleBanner from "./SaleBanner";
import Hero from "./hero";
import Featured from "./Featured";
import JerseyBanner from "./JerseyBanner";
import ShopBy from "./ShopBy";
import FooterNav from "./FooterNav";
import Countdown from "./Countdown";
import Products from "./Products";

function App() {
  return (
    <div className="App">
<Navigation/> 
<SaleBanner/>
<Hero/>
<Featured/>
<JerseyBanner/>
<ShopBy/>
 <Products/>
<FooterNav/>

    </div>
  );
}

export default App;
