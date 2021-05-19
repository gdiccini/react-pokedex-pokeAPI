import React from 'react';
import '../styles/PokemonCard.css';

export default function PokemonCard({ pokemon }) {
  const {
    name,
    types,
    id,
    sprites: { other: { 'official-artwork': { front_default } } }
  } = pokemon;

  const typesNames = types.map((type) => type.type.name);
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

  const generateIdNumber = (number) => {
    switch (number.toString().length) {
    case 1:
      return `Nº00${number}`;
    case 2:
      return `Nº0${number}`;
    default:
      return `Nº${number}`;
    }
  };

  return (
    <div className="pokemon-card">
      <figure>
        <img className="pokemon-image" src={ front_default } alt={ `${name}` } />
      </figure>
      <div className="pokemon-info">
        <p className="pokemon-number">{generateIdNumber(id)}</p>
        <p className="pokemon-name">{nameCapitalized}</p>
        <div className="pokemon-types">
          {
            typesNames.map((type, index) => (
              <p key={ index } className={ `type-content ${type}` }>{ type }</p>
            ))
          }
        </div>
      </div>
    </div>
  );
}
