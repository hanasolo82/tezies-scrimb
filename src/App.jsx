import React from "react";
import Die from "./Die";
import { useState } from "react";

export default function App() { 
    const [dice, setNewDice] = useState(allNewDice());
    
    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i ++) {
            newDice.push(Math.floor(Math.random() * 6 ));
        } 
        return newDice
    }
    const diceElements = dice.map(die => <Die  value={die} />)
    function handleDices() {
        setNewDice(allNewDice)
    }
    return (

        <main className="main">
            <div className=" dies-container" >
                {diceElements}
            </div>

            <button className="roll-button" onClick={handleDices}>ROLL</button>
            
        </main>
    )

        
}