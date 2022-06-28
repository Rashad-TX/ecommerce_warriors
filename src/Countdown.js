import React,{Component} from "react";

class Countdown extends Component{
    constructor(props){
        super(props);
            this.state={
            days:30,
            hours:720,
            minutes:59,
            seconds:59
           }   
        }

        componentDidMount(){
            let countDownDate = new Date("Jul 30, 2022 11:00:00").getTime();
           
            /*Function myFunc runs every second*/
            let myfunc = setInterval(function() {
           
                let now = new Date().getTime();
                let timeleft = countDownDate - now;
            /*Breakdown the calculation*/
                this.days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
                this.hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((timeleft % (1000 * 60)) / 1000); }
                    , 1000);
            }

    
         render(){    
    return (
        <>
        <div>
        <p>{this.state.days}</p>
        <p>{this.state.hours}</p>
        <p>{this.state.minutes}</p>
        <p>{this.state.seconds}</p>
        </div>
        </>
        )
        }
    
}

export default Countdown;