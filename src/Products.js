import React,{Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";



let items = [];

class Products extends Component {
constructor(props) {
 super(props)
 this.state={
 }
}

componentDidMount() {
    items = [];
}



addToCart=(item)=>{
   items.push(item);
  this.props.updateCart(item)
  localStorage.setItem('cart',JSON.stringify(items))

}

render() {
  
 
  return (
    <div className="container prod-cntr">
      <div className="row prod-row">
        {this.props.products?.map((element) => (
          <div className="col-lg-3 col-md-6 prod-col" key={element.id}>
            <div className="card card-container">
              <img
                src={element.image}
                alt="product img"
                className="prod-img img-fluid"
              />
              <div className="card-body">
              <div className="card-title-cntr">
                <p className="card-title">{element.product}</p>
                </div>
                <div  className="card-text-cntr">
                <p className="card-text">{element.description}</p>
                </div>
                <div className ="card-price-cntr">
                <p className="prod-price">${element.price} </p> 
                <FontAwesomeIcon icon={faCartPlus} className="prod-carticon" onClick={()=>{this.addToCart(element)}} />
               </div>
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