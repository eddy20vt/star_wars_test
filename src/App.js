import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainContainer from './components/MainContainer';
import CharacterDetails from './components/character-details/CharacterDetails';

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
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          {characters && <MainContainer data={[...characters].slice(0,9)}/>}
        </Route>
        <Route path="/details">
          <CharacterDetails />
        </Route>
        <Route path="/">
          <div className="App">
            <h1>Star Wars Characters</h1>
            {characters &&
              <MainContainer data={[...characters].slice(0,9)}/>
            }
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
