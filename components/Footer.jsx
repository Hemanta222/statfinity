import { Box, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <Box width={"100%"} display="flex" justifyContent="center" py={8}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap="6"
        mx="auto"
        width={"90%"}
      >
        <GridItem>
          <Heading mb={4}>Pokemon</Heading> ⓒ {new Date().getFullYear()}
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
            <Image src="/btn-g-play.svg" alt="gplay" width="160" height="50" />
            <Image
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
