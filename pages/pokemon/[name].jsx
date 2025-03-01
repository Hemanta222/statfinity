import { getAllPokemons, getPokemonDetailsById } from "@/lib/pokemon";
import { Badge, Box, Card, HStack, Image, Table, Tabs } from "@chakra-ui/react";

import React from "react";

const PokemonDetailsPage = ({ pokemonDetails }) => {
  return (
    <Box width={"90%"} py={"4"} mx="auto">
      <Card.Root
        flexDirection="row"
        overflow="hidden"
        p={{ base: 2, sm: 8 }}
        variant="elevated"
      >
        <Image
          src={pokemonDetails?.sprites?.other?.dream_world?.front_default}
          alt={pokemonDetails.name}
          width={{ base: 120, sm: 150, md: 250 }}
          height={"auto"}
        />
        <Box pl={8}>
          <Card.Body>
            <Card.Title mb="2" textTransform="capitalize">
              {pokemonDetails.name}
            </Card.Title>
            <Card.Description mb="4">ID - {pokemonDetails.id}</Card.Description>
            <HStack>
              <Badge p={2}>Height - {pokemonDetails.height} </Badge>
              <Badge p={2}>Weight - {pokemonDetails.weight}</Badge>
            </HStack>
          </Card.Body>
        </Box>
      </Card.Root>
      <Tabs.Root defaultValue="abilities" width={"100%"} my={2} variant="line">
        <Tabs.List>
          <Tabs.Trigger value="abilities" p={4}>
            Abilities
          </Tabs.Trigger>
          <Tabs.Trigger value="type" p={4}>
            Type
          </Tabs.Trigger>
          <Tabs.Trigger value="stats" p={4}>
            Stats
          </Tabs.Trigger>
          <Tabs.Trigger value="moves" p={4}>
            Moves
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="abilities">
          <Table.ScrollArea borderWidth="1px" rounded="md" mt={4}>
            <Table.Root size="md" stickyHeader interactive>
              <Table.Header>
                <Table.Row bg="bg.emphasized">
                  <Table.ColumnHeader p={2} fontWeight="bold">
                    Name
                  </Table.ColumnHeader>
                  <Table.ColumnHeader p={2} fontWeight="bold">
                    Is Hidden
                  </Table.ColumnHeader>
                  <Table.ColumnHeader p={2} fontWeight="bold">
                    Slot
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {pokemonDetails.abilities.map((ability) => (
                  <Table.Row key={ability.ability.name}>
                    <Table.Cell p={2} textTransform="capitalize">
                      {ability.ability.name}
                    </Table.Cell>
                    <Table.Cell p={2}>
                      {ability.is_hidden ? "True" : "False"}
                    </Table.Cell>
                    <Table.Cell p={2}>{ability.slot}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Table.ScrollArea>
        </Tabs.Content>
        <Tabs.Content value="type">
          <Table.ScrollArea borderWidth="1px" rounded="md" mt={4}>
            <Table.Root size="md" stickyHeader interactive>
              <Table.Header>
                <Table.Row bg="bg.emphasized">
                  <Table.ColumnHeader p={2} fontWeight="bold">
                    Name
                  </Table.ColumnHeader>
                  <Table.ColumnHeader p={2} fontWeight="bold">
                    Slot
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {pokemonDetails.types.map((type) => (
                  <Table.Row key={type.type.name}>
                    <Table.Cell p={2} textTransform="capitalize">
                      {type.type.name}
                    </Table.Cell>
                    <Table.Cell p={2}>{type.slot}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Table.ScrollArea>
        </Tabs.Content>
        <Tabs.Content value="stats">
          <Table.ScrollArea borderWidth="1px" rounded="md" mt={4}>
            <Table.Root size="md" stickyHeader interactive>
              <Table.Header>
                <Table.Row bg="bg.emphasized">
                  <Table.ColumnHeader p={2} fontWeight="bold">
                    Name
                  </Table.ColumnHeader>
                  <Table.ColumnHeader p={2} fontWeight="bold">
                    Base Stat
                  </Table.ColumnHeader>
                  <Table.ColumnHeader p={2} fontWeight="bold">
                    Effort
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {pokemonDetails.stats.map((stat) => (
                  <Table.Row key={stat.stat.name}>
                    <Table.Cell p={2} textTransform="capitalize">
                      {stat.stat.name}
                    </Table.Cell>
                    <Table.Cell p={2}>{stat.base_stat}</Table.Cell>
                    <Table.Cell p={2}>{stat.effort}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Table.ScrollArea>
        </Tabs.Content>
        <Tabs.Content value="moves">
          <Table.ScrollArea borderWidth="1px" rounded="md" mt={4} height={220}>
            <Table.Root size="md" stickyHeader interactive>
              <Table.Header>
                <Table.Row bg="bg.emphasized">
                  <Table.ColumnHeader p={2} fontWeight="bold">
                    Name
                  </Table.ColumnHeader>
                  <Table.ColumnHeader p={2} fontWeight="bold">
                    URL
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {pokemonDetails.moves.map((move) => (
                  <Table.Row key={move.move.name}>
                    <Table.Cell p={2} textTransform="capitalize">
                      {move.move.name}
                    </Table.Cell>
                    <Table.Cell p={2}>{move.move.url}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Table.ScrollArea>
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default PokemonDetailsPage;

export async function getStaticPaths() {
  const pokemons = await getAllPokemons();
  const paths = pokemons.map((pokemon) => ({
    params: { name: pokemon.name.toString() },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const pokemonDetails = await getPokemonDetailsById(params.name.toString());
  return {
    props: {
      pokemonDetails: {
        moves: pokemonDetails.moves,
        stats: pokemonDetails.stats,
        abilities: pokemonDetails.abilities,
        types: pokemonDetails.types,
        height: pokemonDetails.height,
        weight: pokemonDetails.weight,
        sprites: pokemonDetails.sprites,
        name: pokemonDetails.name,
        id: pokemonDetails.id,
      },
    },
  };
}
