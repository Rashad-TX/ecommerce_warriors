import React,{Component} from "react";

class Signup extends Component{
    render(){

        return(
            <>
 <form className="reg-form">
        <h3 className="reg-form-hdr">REGISTER FOR DISCOUNTS</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      
      </form>

            </>
        )
    }
}

export default Signup;