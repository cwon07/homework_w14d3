import {useState} from 'react';
import React from 'react';


function Display(props){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 100);
    }

    const decrement = () => {
        setCount(count => count - 100);
    }

    const reset = () => {
        setCount(0)
    }

    const trivia = props.trivia;
    
    {

    return(
        <>
        <div>
            <h1>Welcome to Jeopardy!</h1>
            <h2>Score: {count} </h2>
            <button onClick={decrement}>Decrease</button>
            <button onClick={increment}>Increase</button>
            <button onClick={reset}>Reset</button>
        </div>
        <div>
            <h2>Let's Play!</h2>
            <button onClick={trivia.question}>Get Question</button>
            <h3>Category: {trivia.category.title}</h3>
            <h4>Points: {trivia.value} </h4>
        </div>
        <div>
            <h4>Answer:{trivia.answer}</h4>
            <button onClick={trivia.question}>Click to Reveal Question</button>
        </div>
        </>
    )
}}

export default Display;