import React, { useContext } from 'react';
import { Context } from '../provider/Provider';
import PokemonCard from '../components/PokemonCard';
import '../styles/MainPage.css';

export default function MainPage() {
  const { pokemons } = useContext(Context);
  return (
    <div>
      <h1>Main Page</h1>
      <section className="cards-container">
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
          ))
        }
      </section>
    </div>
  );
}
