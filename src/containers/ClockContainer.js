import React, { Component } from 'react'

import CalendarToggle from '../components/CalendarToggle'
import Clock from '../components/Clock'

export default class ClockContainer extends Component {
    render() {
        return (
            <div>
                <h3>Clock</h3>
                <p>Calendar Show Toggle</p>
                <CalendarToggle/>
                <p>Clock and Date Display</p>
                <Clock />
            </div>
        )
    }
}
