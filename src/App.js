import React from "react";
import Navigation from "./Navigation";
import SaleBanner from "./SaleBanner";
import Hero from "./hero";
import Featured from "./Featured";
import JerseyBanner from "./JerseyBanner";
import ShopBy from "./ShopBy";
import FooterNav from "./FooterNav";
import ButtonMenu from "./ButtonMenu";
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
<Navigation/> 
<SaleBanner/>
<Hero/>
<Featured/>
<JerseyBanner/>
<ShopBy/>
<ButtonMenu/>
<FooterNav/>
<Cart/>

    </div>
  );
}

export default App;
