import React,{Component} from "react";

 
  class Track extends Component {
    constructor(props) {
      super(props);
  
      //Setting the initial state
      this.state = {
        response: ""
      };
    }
  
    autoResponse = () => {
      this.setState({response: "This is not a valid tracking #"});

    }
  
    render() {
      return (<>
      <div className="form-cntr">
      <h2 className ="form-hdr">Track Your Order</h2>
      <form className ="myform">
        <input placeholder="Enter Tracking #"></input>
        <button onClick={this.autoResponse}>TRACK</button>
        </form>
        <div className="response-cntr">
          <p className="response-text">{this.state.response}</p>
        </div>
        </div>
       </>);
      }
    }
  
    export default Track;