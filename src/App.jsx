import React,{ Component }from 'react';
import './App.css'

export default class App  extends React.Component{
    constructor(props)
 	{
 		super(props);
 		this.state={
             deadline:"July 30,2018"
         }

     }
     

     onchangedeadline()
     {
         this.setState({deadline:'August 2,2018'})
     }
 render(){
  return(
   <div className="App">
   <div className="App-title">Coundown to {this.state.deadline}</div>
   <div className="clock-Days">1 Day</div>
   <div className="clock-Hours">2 Hours</div>
   <div className="clock-Minutes">4 Minutes</div>
   <div className="clock-Seconds">6 Seconds</div>
   <div>
   	<input placeholder="Here fucker!"></input>
   	<button onClick={()=> this.onchangedeadline()}>Blah</button>
   </div>
   </div>
  );
 }
}