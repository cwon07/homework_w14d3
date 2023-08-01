import React from 'react';
import {useState} from 'react';

function Counter(props){

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

    return(
        <>
        <div>
            <h1>Welcome to Jeopardy!</h1>
            <h2>Score: {count} </h2>
            <button onClick={decrement}>Decrease</button>
            <button onClick={increment}>Increase</button>
            <button onClick={reset}>Reset</button>
        </div>
        </>
    )
}

export default Counter;