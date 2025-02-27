import { getAllPokemons, getPokemonDetailsById } from "@/lib/pokemon";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const PokemonDetailsPage = () => {
  const router = useRouter();
//   console.log("router.query", router.query);
  return (
    <Box width={"100%"} bg="red.300" py={"4"}>
      {router.query.id}
    </Box>
  );
};

export default PokemonDetailsPage;

export async function getStaticPaths() {
  const pokemons = await getAllPokemons();
  const paths = pokemons.map((pokemon) => ({
    params: { id: pokemon.id.toString() },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
//   console.log("params", params);
  const pokemonDetails = await getPokemonDetailsById(params.id.toString());
  return { props: { pokemonDetails } };
}
