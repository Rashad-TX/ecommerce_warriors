import React from "react";
import Navigation from "./Navigation";
import SaleBanner from "./SaleBanner";
import Hero from "./hero";
import Featured from "./Featured";
import JerseyBanner from "./JerseyBanner";
import ShopBy from "./ShopBy";
import FooterNav from "./FooterNav";
import ButtonMenu from "./ButtonMenu";
import Products from "./Products";
import Home from "./Home"
import Cart from "./Cart";
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';

class App extends React.Component {
  state= {
    cart: []
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
    <Router>
      <Navigation/> 

     {/* <Route path="/hero" element={<Hero />}/> */}



      {/* <ButtonMenu updateCart={this.updateCart}/> */}
 
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/men" element={ <ButtonMenu updateCart={this.updateCart} path={'men'}/>} />
  <Route path="/women" element={ <ButtonMenu updateCart={this.updateCart} path={'women'}/>} />
  <Route path="/jersey" element={ <ButtonMenu updateCart={this.updateCart} path={'jersey'}/>} />
  <Route path="/hat" element={ <ButtonMenu updateCart={this.updateCart} path={'hats'}/>} />
  <Route path="/accessories" element={ <ButtonMenu updateCart={this.updateCart} path={'accessories'}/>} />
  <Route path="/collectable" element={ <ButtonMenu updateCart={this.updateCart} path={'collectable'}/>} />
  <Route path="/new" element={ <ButtonMenu updateCart={this.updateCart} path={'new'}/>} />
  <Route path="/top" element={ <ButtonMenu updateCart={this.updateCart} path={'top'}/>} />
  <Route path="/products" element={ <ButtonMenu updateCart={this.updateCart} path={'all'}/>} />
  <Route path="/cart"  element={<Cart cartItems={this.state.cart} removeFromCart={this.removeFromCart}/>}/>
  
  

 </Routes>
      <FooterNav/>
      
    </Router>
    </div>
    )
  }
}


export default App;
