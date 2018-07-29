import React,{ Component }from 'react';
import './App.css'

export default class App  extends React.Component{
    constructor(props)
 	{
 		super(props);
 		this.state={
             deadline:"July 30,2018",
             newDeadline:''
         }

     }
     

     onchangedeadline()
     {
         console.log(this.state)
         this.setState({deadline:this.state.newDeadline})
     }
 render(){
  return(
   <div className="App">
   <div className="App-title">Coundown to {this.state.deadline}</div>
  
   <div>
   	<input placeholder="Here fucker!"onChange={event => this.setState({newDeadline:event.target.value})}></input>
   	<button onClick={()=> this.onchangedeadline()}>Blah</button>
   </div>
   </div>
  );
 }
}