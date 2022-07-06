import React,{Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart";




class Products extends Component {
  constructor(props, context) {
   super(props)
   this.state={
    shoppingCart:[]
   }
  }

 
  addToCart=(item)=>{
  
    this.state.shoppingCart.push(item)

    this.setState({shoppingCart:this.state.shoppingCart})
    localStorage.setItem('cart',JSON.stringify(this.state.shoppingCart))

  }
  
  render() {
    let totalItems = this.state.shoppingCart.length;
   
    return (
      <div className="container prod-cntr">
        <div className="row prod-row">
          {this.props.products?.map((element) => (
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
                  <p className="prod-price">{element.price}  <FontAwesomeIcon icon={faCartPlus} className="prod-carticon" onClick={()=>{this.addToCart(element)}} /></p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
              </div>
      </div>
    );
  }
}

export default Products;