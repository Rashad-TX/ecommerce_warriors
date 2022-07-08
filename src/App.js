import React from "react";
import Navigation from "./Navigation";
import FooterNav from "./FooterNav";
import ButtonMenu from "./ButtonMenu";
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
  </Routes>
      <FooterNav/>
  </Router>
    </div>
    )
  }
}


export default App;
