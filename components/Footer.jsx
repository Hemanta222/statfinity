import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <Box width={"100%"} display="flex" justifyContent="center" bg="#ffc107">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap="6"
        mx="auto"
        width={"90%"} 
        p={5}
      >
        <GridItem>
          <Stack
            width="160px"
            onClick={() => router.push("/")}
            cursor="pointer"
            // display={{ base: "none", sm: "block" }}
          >
            <Center>
              <Image src="/logo.png" alt="logo" width="60px" />
            </Center>
            <Image
              src="/logo-text.png"
              alt="logo"
              // height="48px"
              width="180px"
            />
          </Stack>
 
          {/* <NextImage src="/logo.png" alt="logo" fill='true' />
          </Image> */}
          {/* <Heading mb={4}>Pokemon Explorer</Heading> */}
          {/* <Text fontSize={14}>ⓒ {new Date().getFullYear()}</Text> */}
        </GridItem>
        <GridItem>
          <Heading mb={6}>About</Heading>
          <Stack>
            <Text>FAQ</Text> <Text>Blog</Text>
            <Text>Support</Text>
            <Text>Contact Us</Text>
            <Text>Career</Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Heading mb={6}>Get the App</Heading>
          <Stack>
            <NextImage
              src="/btn-g-play.svg"
              alt="gplay"
              width="160"
              height="50"
            />
            <NextImage
              src="/btn-appstore.svg"
              alt="app-store"
              width="160"
              height="50"
            />
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
