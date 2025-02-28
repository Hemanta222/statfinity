import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box  width={"100%"}  bg='#ffc107'>
      <Box
        width={"90%"}
        height={"80px"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mx="auto"
      >
        <Flex  align="center">
          <Image src="/logo.png" alt="logo" width="60px" />
          <Image src="/logo-text.png" alt="logo" height={"52px"} />
        </Flex>

        <Box width={{ base: 100, sm: 200, md: 300 }}>
          <Input placeholder="Subtle" variant="subtle" />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
