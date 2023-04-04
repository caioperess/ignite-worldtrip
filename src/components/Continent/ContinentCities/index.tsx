import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { CitieCard } from "./CitieCard";
import { ContinentProps } from "@/dtos/continent";

type ContinentCitiesProps = {
  continent: ContinentProps;
};

export function ContinentCities({ continent }: ContinentCitiesProps) {
  return (
    <Flex
      maxW="1160px"
      mx="auto"
      mb="5rem"
      px="4"
      direction="column"
      align="flex-start"
      justify="flex-start"
      gap="2.5rem"
    >
      <Heading
        as="h2"
        fontWeight="medium"
        fontSize={["xl", "2xl", "3xl", "4xl"]}
      >
        Cidades +100
      </Heading>

      <SimpleGrid
        w="100%"
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gridGap="2.875rem"
      >
        {continent.cities_list.map((city) => (
          <CitieCard city={city} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
