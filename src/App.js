import React, { useContext } from 'react';
import { Context, Provider } from './provider/Provider';
import './App.css';

function App() {
  const { pokemons } = useContext(Context);
  console.log(pokemons);
  return (
    <Provider>
      <div className="App">
        <h1>Minha pokedex</h1>
      </div>
    </Provider>
  );
}

export default App;
