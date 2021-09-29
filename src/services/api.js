export const fetchPokemonsURL = async (max, offset) => {
  const { results } = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${max}&offset=${offset}`)
    .then((response) => response.json());
  return results;
};

export const fetchPokemon = async (url) => {
  const result = await fetch(url).then((response) => response.json());
  return result;
};
