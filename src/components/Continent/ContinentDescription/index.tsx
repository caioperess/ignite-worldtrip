import { ContinentProps } from "@/dtos/continent";
import { Flex, SimpleGrid, Text, Icon } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

type ContinentDescriptionProps = {
  continent: ContinentProps;
};

export function ContinentDescription({ continent }: ContinentDescriptionProps) {
  return (
    <SimpleGrid
      maxW="1160px"
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      gridGap="4.375rem"
      px="4"
      my="5rem"
      mx="auto"
    >
      <Text
        fontWeight="normal"
        fontSize={["md", "lg", "xl", "2xl"]}
        textAlign="justify"
        color="dark.text"
      >
        {continent.description}
      </Text>

      <Flex
        align="center"
        justify={{ base: "space-around", lg: "space-between" }}
        wrap="wrap"
      >
        <Flex direction="column" align="center">
          <Text
            fontWeight="semibold"
            color="yellow.400"
            fontSize={["2xl", "3xl", "4xl", "5xl"]}
          >
            {continent.countries}
          </Text>
          <Text
            fontWeight="semibold"
            color="dark.text"
            fontSize={["md", "lg", "xl", "2xl"]}
          >
            países
          </Text>
        </Flex>

        <Flex direction="column" align="center">
          <Text
            fontWeight="semibold"
            color="yellow.400"
            fontSize={["2xl", "3xl", "4xl", "5xl"]}
          >
            {continent.languages}
          </Text>
          <Text
            fontWeight="semibold"
            color="dark.text"
            fontSize={["md", "lg", "xl", "2xl"]}
          >
            línguas
          </Text>
        </Flex>

        <Flex direction="column" align="center">
          <Text
            fontWeight="semibold"
            color="yellow.400"
            fontSize={["2xl", "3xl", "4xl", "5xl"]}
          >
            {continent.cities}
          </Text>
          <Text
            display="flex"
            alignItems="center"
            fontWeight="semibold"
            color="dark.text"
            fontSize={["md", "lg", "xl", "2xl"]}
          >
            cidades +100
            <Icon
              as={FiInfo}
              ml="1"
              w={["0.8rem", "0.8rem", "1rem", "1rem"]}
              h={["0.8rem", "0.8rem", "1rem", "1rem"]}
              color="dark.info_50"
            />
          </Text>
        </Flex>
      </Flex>
    </SimpleGrid>
  );
}
