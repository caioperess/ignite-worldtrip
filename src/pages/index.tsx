import { Banner } from "@/components/Banner";
import { FlexContainer } from "@/components/FlexContainer";
import { Header } from "@/components/Header";
import { Slide } from "@/components/Slide";
import { Details } from "@/components/Details";
import { Box, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Worldtrip | Home</title>
      </Head>

      <Header />
      <Banner />

      <Details />

      <FlexContainer align="center" justify="center" mb="3.25rem">
        <Box
          w="90px"
          borderTop="2px"
          borderTopStyle="solid"
          borderColor="dark.text"
        />
      </FlexContainer>

      <FlexContainer align="center" justify="center">
        <Text
          textAlign="center"
          fontWeight="medium"
          fontSize={["md", "xl", "2xl", "4xl"]}
          mb="3.25rem"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </FlexContainer>

      <FlexContainer h="450px" align="center" justify="center" mb="3.25rem" p="4">
        <Slide />
      </FlexContainer>
    </Box>
  );
}
