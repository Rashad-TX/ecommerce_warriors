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
  console.log(items)

  this.props.updateCart(item)
  localStorage.setItem('cart',JSON.stringify(items))

}

render() {
  
 
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