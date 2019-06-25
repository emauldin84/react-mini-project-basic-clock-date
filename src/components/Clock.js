import React from 'react'
import CalendarToggle from '../components/CalendarToggle'

let Clock = (props) => {
    return(

<div className="card text-center" style={{width: '18rem'}}>
    <div className="card-body">
        <h5 className="card-title">{props.time}</h5>
        <p className="card-text">{props.showTime ? props.date : null}</p>
        <CalendarToggle toggle={props.toggleDate}/>
    </div>
</div>
    )
}

export default Clock


