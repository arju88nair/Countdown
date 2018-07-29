import React, { Component } from 'react';
import './App.css'

class Clock extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
days:0,
Hours:0,
Minutes:0,
Seconds:0
        }

    }


    render() {
        return (
            <div>
                <div className="clock-Days">1 Day</div>
                <div className="clock-Hours">2 Hours</div>
                <div className="clock-Minutes">4 Minutes</div>
                <div className="clock-Seconds">6 Seconds</div>
            </div>
        );
    }
}

export default Clock