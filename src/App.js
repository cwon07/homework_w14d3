import React from 'react';
import Display from './components/Display';
import {useState} from 'react';


function App() {
  const [trivia, setTrivia] = useState({});

  const GetTrivia = async () => {
    const response = await fetch (
      'http://jservice.io/api/random'
    )
    const data = await response.json();
    setTrivia(data);
  }
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Display trivia ={GetTrivia} />

    </div>
  );
}

export default App;
