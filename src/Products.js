import React,{Component} from "react";
import {ProductList} from "./ProductList";

class Products extends Component{
    render(){
       
       return(
<>
{

          
            <div className="container prod-cntr" >
            <div className = "row prod-row">
    {ProductList.map(element =>( 
        <div className = "col-lg-3 prod-col" key={element.id}>
            <img src = {element.image} alt ="product img" className="prod-img"/>
            <p className ="prod-title">{element.product}</p>
            <p className ="prod-desc">{element.description}</p>
            <p className ="prod-price">{element.price}</p>
            </div>))}
            </div>
            </div>
}

        

</>

)

    }
        
}    

export default Products;