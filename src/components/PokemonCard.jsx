import React from 'react';

export default function PokemonCard({ pokemon }) {
  const {
    name,
    types,
    id,
    sprites: { other: { 'official-artwork': { front_default } } }
  } = pokemon;

  const typesNames = types.map((type) => type.type.name);
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div>
      <img src={ front_default } alt={ `${name}` } />
      <p className="pokemon-number">{id}</p>
      <p className="pokemon-name">{nameCapitalized}</p>
      <div className="pokemon-types">
        {
          typesNames.map((type, index) => (
            <p key={ index } className={ `${type}` }>{ type }</p>
          ))
        }
      </div>
    </div>
  );
}
