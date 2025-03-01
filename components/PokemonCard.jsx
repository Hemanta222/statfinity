import { Box, Card, Text } from "@chakra-ui/react";
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
      borderRadius={16}
      transition="all .2s ease-in"
      bg="rgba(255, 255, 255, 0.8)"
      _hover={{
        cursor: "pointer",
        border: "3px solid #ffc107",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.5)",
        scale: "1.05",
        bg: "rgba(255, 255, 255, 0.99)",
      }}
      onClick={() => router.push(`/pokemon/${name}`)}
    >
      <Box position="relative" width="100%" pt="56.25%" mt={8}>
        <Image src={image} alt={name} fill="true" priority={true} />
      </Box>

      <Card.Body>
        <Card.Title
          textTransform="capitalize"
          mt={6}
          _hover={{ fontWeight: "bolder" }}
        >
          {name}
        </Card.Title>
        <Text textAlign="center" my={1} color="gray.600">
          #{id.toString().length < 2 ? "0" + id : id}
        </Text>
      </Card.Body>
    </Card.Root>
  );
};

export default PokemonCard;
