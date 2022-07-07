import React, { Component } from "react";
import plus from "./assets/images/plus.svg";
import minus from "./assets/images/minus.svg";


class Cart extends Component{
    constructor(props){
        super(props)

this.state = {
    totalItems: 0,
    amount:0,
    taxes: 0,
    totalAmount: 0
}
        
    }

    removeItemFromCart = (id) => {
      const filteredItem = this.props.cartItems.filter(item => item.id !== id)
      localStorage.setItem("cart", JSON.stringify(filteredItem))
      this.props.removeFromCart(id)
      console.log(id)
      console.log(filteredItem)
    }
    
        
    
    
    
    render(){


// const cartItems = JSON.parse( localStorage.getItem('cart'));
const cartItems = this.props.cartItems;
const totalItems = cartItems?.length || 0;
const amount = cartItems?.reduce((accumulator, object) => {
    return accumulator + object.price;},0) ||0;
const taxes = (amount * 0.065);
 const totalAmount = amount + taxes;

return(<>
<div>
<h2>YOUR CART</h2>
<p>Total Items <span>{totalItems} </span></p>
<p>Amount <span>{amount}</span></p>
<p>Total Taxes <span>{taxes}</span></p>
<p>Total Amount <span>{totalAmount}</span></p>

<p>Check Out</p>
</div>
      <div className="container prod-cntr">
        <div className="row prod-row">
          {cartItems?.map((element) => (
            <div className="col-lg-3 prod-col" key={element.id}>
              <div className="card card-container">
                <img
                  src={element.image}
                  alt="product img"
                  className="prod-img"
                />
                <div className="card-body">
                  <p className="card-title">{element.product}</p>
                  <p className="card-text">{element.description}</p>
                  <div className = "quantity-container">
                  <img src={minus} className ="minus"/> <p className ="quantity" >QUANTITIY:<span className="qnty-txt"></span></p> <img src={plus} className ="plus"/> 
                  <button onClick={() => this.removeItemFromCart(element.id)}>Remove From Cart</button> 
                 </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
        </div>
      </div>

        </>)
    }
}

export default Cart;