import React from 'react';
import Counter from './components/Counter';

import {useEffect} from 'react';

  const API_URL = "http://jservice.io/api/random"

  const App = () => {

    const randomTrivia = async (question) => {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        randomTrivia('Wine');
    }, []);

  return(
    <>
    <div className="App">
      <h1>Hello</h1>
      <Counter />
    </div>
    </>
  );
}
export default App;
