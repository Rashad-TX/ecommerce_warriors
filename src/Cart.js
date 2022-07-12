import React, { Component } from "react";
import trash from  "./assets/images/trash.svg";


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
        }
    
        
    
    
    
    render(){

      localStorage.setItem("totalItems",0);
// const cartItems = JSON.parse( localStorage.getItem('cart'));
const cartItems = this.props.cartItems;
const totalItems = cartItems?.length || 0;
localStorage.setItem("totalItems",totalItems);
const amount = cartItems?.reduce((accumulator, object) => {
    return accumulator + object.price;},0) ||0;
const rndIntAmt = amount.toFixed(2);
const taxes = (amount * 0.065);
const rndTaxes = taxes.toFixed(2);
 const totalAmount = amount + taxes;
 const rounded = totalAmount.toFixed(2);

return(<>
<div>
<h2 className ="cart-hdr">YOUR CART</h2>
<div className = "cart-totals">

<p>Total Items: <span >{totalItems} </span></p>
<p>Amount: <span>${rndIntAmt}</span></p>
<p>Total Taxes:  <span >${rndTaxes}</span></p>
<p className="bold-totals">Total Amount:  <span className="bold-totals">${rounded}</span></p>
<button className=" checkout-btn align-self-end">Check Out</button>
</div>


</div>
      <div className="container prod-cntr">
        <div className="row prod-row">
          {cartItems?.map((element) => (
            <div className="col-lg-3 prod-col" key={element.id}>
              <div className="card-container">
                <img
                  src={element.image}
                  alt="product img"
                  className="prod-img"
                />
                <div className="card-body">
                  <p className="card-title">{element.product}</p>
                  <p className="card-text">{element.description}</p>
                  <p className="card-text">{element.price}</p>
                 <div className = "rmv-btn-container">
                  <button onClick={() => this.removeItemFromCart(element.id)} className="rmv-btn">Remove <img src={trash} className ="trash-icon"/></button> 
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