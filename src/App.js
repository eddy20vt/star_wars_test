import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import MainContainer from './components/main-container/MainContainer';
import CharacterDetails from './components/character-details/CharacterDetails';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/details/:id">
          <CharacterDetails/>
        </Route>
        <Route path="/">
          <div className="App">
            <h1>Star Wars Characters</h1>
            <MainContainer/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
