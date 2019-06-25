import React from 'react'

export default function StartStopButton(props) {
    return (
        <div>
            <button onClick={props.start}>Start</button>
            <button onClick={props.stop}>Stop</button>
            
        </div>
    )
}
