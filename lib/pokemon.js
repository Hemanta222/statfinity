export async function getAllPokemons() {
  const pokemonResponse = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
  );

  const pokemonResponseJson = await pokemonResponse.json();

  const promiseArray = pokemonResponseJson.results.map(async (pokemon) => {
    const pokemonDetailsResponse = await fetch(pokemon.url);
    if (pokemonDetailsResponse.ok) {
      const data = await pokemonDetailsResponse.json();
      return {
        name: data.name,
        order: data.order,
        id: data.id,
        image: data?.sprites?.other?.dream_world?.front_default,
      };
    }
  });

  const promiseArrayResponse = await Promise.all(promiseArray);

  return promiseArrayResponse || [];
}
export async function getPokemonDetailsById(id) {
  const pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  const response = await pokemonResponse.json();
  return response || null;
}
