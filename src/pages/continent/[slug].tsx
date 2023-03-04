import { ContinentBanner } from "@/components/Continent/ContinentBanner";
import { ContinentCities } from "@/components/Continent/ContinentCities";
import { ContinentDescription } from "@/components/Continent/ContinentDescription";
import { FlexContainer } from "@/components/FlexContainer";
import { Header } from "@/components/Header";
import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function ContinentPage() {
  return (
    <Box>
      <Head>
        <title>Worldtrip | Europa</title>
      </Head>

      <Header />

      <ContinentBanner />

      <ContinentDescription />

      <ContinentCities />
    </Box>
  );
}
