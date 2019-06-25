import React from 'react'

export default function CalendarToggle(props) {
        return (
            <div>
                <button onClick={props.toggle} className="btn btn-primary">Toggle Date</button>
            </div>
        )
    }
