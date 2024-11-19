import {useState, useEffect, useRef} from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"


export default function App() {

    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    const rounds = useRef(0)
    
    
    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("You won!")
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
            
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
        
    }
    

    
    function rollDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
                    
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
            rounds.current = 0
        }
        
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    function counter() {
         rounds.current =  rounds.current + 1
         return rounds.current
         
          
    }
    
    function handleClick() {
        counter()
        rollDice()
    }

    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            {tenzies ?
            <>
            <h1 className="won-title">You won!</h1>
                <ol className="score-list">Best Score
                    <li>{rounds.current} Times | 1000 sec.</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </>
            :
            <>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            </> 
            }
            
            <button 
                className="roll-dice" 
                onClick={handleClick}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
            { !tenzies &&
                   <div className="container-score">
                     <p className="rounds">Rounds:<br/>{!tenzies && rounds.current}</p>
                     <p className="timer">Time<br/>1..</p>
                </div>
            }
            
        </main>
    )
}