import React, { useEffect, useState } from 'react';

const Trivia = () => {
  const [trivia, setTrivia] = useState({});
  const [revealQuestion, setRevealQuestion] = useState(false);

  const randomTrivia = async () => {
    const response = await fetch("http://jservice.io/api/random");
    const data = await response.json();
    setTrivia(data[0]);
    setRevealQuestion(true);
  };

  useEffect(() => {
    randomTrivia();
  }, []);

  const revealQuestionHandler = () => {
    setRevealQuestion(!revealQuestion);
  };

    return (
        <>
          <div className="getQuestion">
            <h2>Let's Play!</h2>
            <button onClick={randomTrivia}>Get Question</button>
            {revealQuestion && (
              <>
                <h3>Category: {trivia.category.title}</h3>
                <h4>Points: {trivia.value}</h4>
                <h4>Answer: {trivia.answer}</h4>
                <button onClick={revealQuestionHandler}>Click to Reveal Question</button>                
              </>
            )}
            {revealQuestion && <p>{trivia.question}</p>}
          </div>
        </>
      );
};

export default Trivia;