import React, {Component} from 'react'
import moment from 'moment'

export default class Clock extends Component{
    state = {
        time: null,
        date: null,
    }

    
    componentDidMount() {
        this.setState({
            date: moment().format('ll')
        })
        setInterval(() => {
            let time = moment().format('LTS');
            this.setState({
                time
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <p>{this.state.time}</p>
                <p>{this.state.date}</p>
                
            </div>
        )
    }
} 
