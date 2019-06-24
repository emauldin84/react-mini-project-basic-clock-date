import React, { Component } from 'react'
import moment from 'moment'

import CalendarToggle from '../components/CalendarToggle'
import Clock from '../components/Clock'

export default class ClockContainer extends Component {
    state = {
        time: null,
        date: null,
        showTime: true,
    }

    
    componentDidMount() {
        this.setState({
            date: moment().format('ll'),
        })
        setInterval(() => {
            let time = moment().format('LTS');
            this.setState({
                time
            })
        }, 1000)
    }

    handleDateToggler = () => {
        this.setState((prevState) => {
            return { showTime: !prevState.showTime }
        })
    }

    render() {
        return (
            <div className='container'>
                <h3>Clock</h3>
                <CalendarToggle toggle={this.handleDateToggler}/>
                <Clock date={this.state.date} time={this.state.time} showTime={this.state.showTime}/>
            </div>
        )
    }
}
