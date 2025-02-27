import { Box, Heading, Input } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box bg="red.400" width={"100%"}>
      <Box
        width={"90%"}
        height={"80px"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mx="auto"
      >
        <Heading>Pokemon</Heading>
        <Box width={{ base: 100, sm: 200, md: 300 }}>
          <Input placeholder="Subtle" variant="subtle" />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
