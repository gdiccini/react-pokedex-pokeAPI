import React, { useContext } from 'react';
import { Context } from '../provider/Provider';
import PokemonCard from '../components/PokemonCard';

export default function MainPage() {
  const { pokemons } = useContext(Context);
  // console.log(pokemons);
  return (
    <div>
      <h1>Main Page</h1>
      {
        pokemons.map((pokemon) => (
          <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
        ))
      }
    </div>
  );
}
