import React,{useState} from 'react'
import Add from './components/Add'
import './App.css';

const App2 = () => {
    const [list, setList] = useState(["Amine", "Ghassen"])

    const addTask=(x)=>{
        setList([...list, x])
    }

    return (
        <div className="App">
            <Add addTask={addTask} />
            {list.map(el=><h1>{el}</h1>)}
        </div>
    )
}

export default App2
