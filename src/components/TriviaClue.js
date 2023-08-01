import React from 'react';

const TriviaClue = ({ trivia }) => {
    return (
        <div className = "hints">
            {" "}
        <h3>Category: {trivia.category.title}</h3>
        <h4>Points: {trivia.value} </h4>
        <h4>Answer:{trivia.answer}</h4> | {" "}
    </div>
    )
}

export default TriviaClue;