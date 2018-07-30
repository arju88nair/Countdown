import React, { Component } from 'react';
import './App.css'

class Clock extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
Days:0,
Hours:0,
Minutes:0,
Seconds:0
        }

    }

    getTimeUntil(deadline){
        const time=Date.parse(deadline)-Date.parse(new Date())
        const seconds = Math.floor((time/1000) % 60)
        const minutes = Math.floor((time/1000/60) % 60)
        const hours = Math.floor((time/(1000*60*60)) % 24)
        const days = Math.floor((time/(1000*60*60*24)))
        console.log(seconds+"Sec"+minutes+"min"+hours+"hours"+days)
    }


    render() {
        this.getTimeUntil(this.props.deadline)
        return (
            <div>
                <div className="clock-Days">{this.state.Days} days</div>
                <div className="clock-Hours">{this.state.Hours} Hours</div>
                <div className="clock-Minutes">{this.state.Minutes} Minutes</div>
                <div className="clock-Seconds">{this.state.Seconds} Seconds</div>
            </div>
        );
    }
}

export default Clock