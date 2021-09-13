import React, { useState } from 'react'

const Add = (props) => {

    const [myInput, setMyInput] = useState("")

    return (
        <div>
            <input type="text" onChange={(e) => setMyInput(e.target.value)} />
            <button onClick={()=>props.addTask(myInput)}>ADD</button>
        </div>
    )
}

export default Add
