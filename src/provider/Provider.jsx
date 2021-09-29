import React, { createContext, useState, useEffect } from 'react';
import { fetchPokemonsURL, fetchPokemon } from '../services/api';

const Context = createContext();

function PokemonsProvider({ children }) {
  const [pokemonsURL, setPokemonsURL] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  const firstGeneration = 151;

  useEffect(async () => {
    async function getPokemonsURL() {
      const response = await fetchPokemonsURL(firstGeneration, 0);
      const allURL = [];
      response.forEach((item) => allURL.push(item.url));
      setPokemonsURL(allURL);
    }
    getPokemonsURL();
  }, []);

  useEffect(() => {
    pokemonsURL.forEach(async (url) => {
      const pokemon = await fetchPokemon(url);
      setPokemons((prevState) => {
        const ordered = prevState.sort((pokeA, pokeB) => pokeA.id - pokeB.id);
        return ordered.concat(pokemon);
      });
    });
  }, [pokemonsURL]);

  const context = { pokemons };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

export { Context, PokemonsProvider as Provider };
