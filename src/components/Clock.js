import React from 'react'

let Clock = (props) => {
    return(
        <div>
            <p className='clock'>{props.time}</p>
            <p>{props.showTime ? props.date : null}</p>
        </div>
    )
}

export default Clock


