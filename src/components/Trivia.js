import React from 'react';

const Trivia = () => {
    return (
        <>
        <div className="trivia">
            <h1>Welcome to Jeopardy!</h1>
            <div className = "getQuestion">
                <h2>Let's Play!</h2>
                <button>Get Question</button>
            </div>
           
            <div className = "question">
                <button>Click to Reveal Question</button>
                <p></p>
            </div>
        </div>
        </>
    )
}

export default Trivia;