import React, { useState } from 'react'
import MoleContainer from './MoleContainer'
import './App.css'

function App(){
    let [score, setScore] = useState(0)

    const createMoleHill = () => { 
       let randomIndex = Math.floor(Math.random() * 9)
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                key={i}
                setScore={setScore}
                isActive={i === randomIndex}
                score={score} />
            )
        }
    
        return ( 
            <div className='moleGrid'>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>React-a-Mole!</h1>
            <div>
            Score: {score}
            </div>
            
                {createMoleHill()}
        
    
        </div>
    )
}

export default App

// test