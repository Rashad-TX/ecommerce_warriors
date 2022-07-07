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

class App extends React.Component {
  state= {
    cart: [...JSON.parse( localStorage.getItem('cart'))]
  }

  updateCart = (cartItem) => {
    this.setState({cart: [...this.state.cart, cartItem]})
  }
  removeFromCart = (id) => {
    this.setState({cart: this.state.cart.filter(i => i.id !== id)})
  }
  render() {
    return (
    <div className="App">
      <Navigation/> 
      <SaleBanner/>
      <Hero/>
      <Featured/>
      <JerseyBanner/>
      <ShopBy/>
      <ButtonMenu updateCart={this.updateCart}/>
      <FooterNav/>
      <Cart cartItems={this.state.cart} removeFromCart={this.removeFromCart}/>
    </div>
    )
  }
}
// function App() {
//   const [cart, setCart] = usState([])

//   return (
//     <div className="App">
// <Navigation/> 
// <SaleBanner/>
// <Hero/>
// <Featured/>
// <JerseyBanner/>
// <ShopBy/>
// <ButtonMenu/>
// <FooterNav/>
// <Cart/>

//     </div>
//   );
// }

export default App;
