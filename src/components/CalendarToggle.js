import React from 'react'

export default function CalendarToggle(props) {
        return (
            <div>
                <button onClick={props.toggle}>Toggle Date</button>
            </div>
        )
    }
