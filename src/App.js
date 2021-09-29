import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonInfo from './components/PokemonInfo';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route path="/pokedex/:id" component={ PokemonInfo } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
