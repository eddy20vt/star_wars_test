import MainContainer from './components/MainContainer';
import { useState, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import mockedPeople from './mockData/people.json';

function App() {
  const initialState = null;
  const [characters, setCharacters] = useState(initialState);

  useEffect(() => {
    setCharacters([...mockedPeople.results]);
  }, [])


  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      {characters &&
        <MainContainer data={[...characters].slice(0,9)}/>
      }
    </div>
  );
}

export default App;
