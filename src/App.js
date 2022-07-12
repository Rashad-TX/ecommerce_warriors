import React from "react";
import Navigation from "./Navigation";
import FooterNav from "./FooterNav";
import ButtonMenu from "./ButtonMenu";
import Home from "./Home"
import Cart from "./Cart";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Track from "./Track";
import About from "./About";
import Contact from "./Contact";
import Signup from "./Signup";

class App extends React.Component {
constructor(props){
  super(props)
}


state= {
  cart: []
}


  updateCart = (cartItem) => {
    console.log('cartItems', cartItem);
    this.setState({cart: [...this.state.cart, cartItem]})
    console.log('cart',this.state.cart);
  }
  removeFromCart = (id) => {
    this.setState({cart: this.state.cart.filter(i => i.id !== id)})
  }
  render() {
    return (
    <div className="App">
    <Router>
      <Navigation updateCart={this.state.cart.length}/> 
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/men" element={ <ButtonMenu updateCart={this.updateCart} path={'men'}/>} />
  <Route path="/women" element={ <ButtonMenu updateCart={this.updateCart} path={'women'}/>} />
  <Route path="/jersey" element={ <ButtonMenu updateCart={this.updateCart} path={'jersey'}/>} />
  <Route path="/hat" element={ <ButtonMenu updateCart={this.updateCart} path={'hats'}/>} />
  <Route path="/accessories" element={ <ButtonMenu updateCart={this.updateCart} path={'accessories'}/>} />
  <Route path="/collectable" element={ <ButtonMenu updateCart={this.updateCart} path={'collectable'}/>} />
  <Route path="/new-arrivals" element={ <ButtonMenu updateCart={this.updateCart} path={'new-arrivals'}/>} />
  <Route path="/top-products" element={ <ButtonMenu updateCart={this.updateCart} path={'top-products'}/>} />
  <Route path="/products" element={ <ButtonMenu updateCart={this.updateCart} path={'all'}/>} />
  <Route path="/curry" element={ <ButtonMenu updateCart={this.updateCart} path={'curry'}/>} />
  <Route path="/klay" element={ <ButtonMenu updateCart={this.updateCart} path={'klay'}/>} />
  <Route path="/poole" element={ <ButtonMenu updateCart={this.updateCart} path={'poole'}/>} />
  <Route path="/draymond" element={ <ButtonMenu updateCart={this.updateCart} path={'draymond'}/>} />
  <Route path="/cart"  element={<Cart cartItems={this.state.cart} removeFromCart={this.removeFromCart}/>}/>
 <Route path="/track" element={<Track/>}/>
 <Route path="/aboutus" element={<About/>}/>
 <Route path="/contactus" element={<Contact/>}/>
 <Route path = "/signup" element={<Signup/>}/>
  </Routes>
      <FooterNav/>
  </Router>
    </div>
    )
  }
}


export default App;
