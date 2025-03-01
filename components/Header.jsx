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
import { useRouter } from "next/router";
import React from "react";
import Search from "./Search";

const Header = () => {
  const router = useRouter();
  return (
    <Box width={"100%"} bg="#ffc107">
      <Box
        width={"90%"}
        height={"100px"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mx="auto"
      >
        <Flex align="center" onClick={() => router.push("/")} cursor="pointer">
          <Image
            src="/logo.png"
            alt="logo"
            width={{ base: "40px", md: "60px" }}
          />
          <Image
            src="/logo-text.png"
            alt="logo"
            height={{ base: "40px", md: "52px" }}
          />
        </Flex>

        <Box width={{ base: 100, sm: 200, md: 300 }}>
          {/* <Input placeholder="Subtle" variant="subtle" /> */}
          <Search />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
