import React,{Component} from "react";

class Countdown extends Component{
    constructor(props){
        super(props);
            this.state={
            days:"00",
            hours:"00",
            minutes:"00",
            seconds:"00"
           }   
        }

        componentDidMount(){
            let countDownDate = new Date();
             countDownDate.setDate(countDownDate.getDate()+1);
           
            let myfunc = setInterval(
                function () {
                  let now = new Date().getTime();
                  let timeleft = countDownDate - now;
                  this.setState({
                    days: Math.floor(timeleft / (1000 * 60 * 60 * 24)),
                    hours: Math.floor(
                      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                    ),
                    minutes: Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((timeleft % (1000 * 60)) / 1000)
                  });
                }.bind(this), // we added the binding here
                1000
              );





        }

    
         render(){    
    return (
        <>
        <div className="countdown-timer">
            <div className = "countdown-text">
        <p>Hrs: Min: Sec:</p>
            </div>
            <div className="countdown-time">
        <p>{this.state.hours}:{this.state.minutes}:{this.state.seconds} </p>
            </div>
        </div>
        </>
        )
        }
    
}

export default Countdown;