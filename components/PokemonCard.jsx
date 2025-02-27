import { Box, Card } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const PokemonCard = ({ data }) => {
  const { name, order, id, image } = data;
  const router = useRouter();
  return (
    <Card.Root
      overflow="hidden"
      height={{
        base: "auto",
        md: 300,
      }}
      width={"auto"}
      variant="elevated"
      display="flex"
      alignItems="center"
      _hover={{ cursor: "pointer" }}
      onClick={() => router.push(`/pokemon/${id}`)}
    >
      <Box position="relative" width="100%" pt="56.25%" mt={8}>
        <Image src={image} alt={name} fill="true" priority={true} />
      </Box>

      <Card.Body gap="2">
        <Card.Title textTransform="capitalize" mt={8}>
          {name}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default PokemonCard;
