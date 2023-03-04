import { Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { TravelItem } from "./travelItem";

export function Details() {
  return (
    <Grid
      maxW={1160}
      gridTemplateColumns={{ base: "1fr 1fr", md: "repeat(5,1fr)" }}
      gridGap="1rem"
      margin="5rem auto"
      p="4"
    >
      <GridItem>
        <TravelItem image="/cocktail.svg">vida noturna</TravelItem>
      </GridItem>

      <GridItem>
        <TravelItem image="/surf.svg">praia</TravelItem>
      </GridItem>

      <GridItem>
        <TravelItem image="/building.svg">moderno</TravelItem>
      </GridItem>

      <GridItem>
        <TravelItem image="/museum.svg">clássico</TravelItem>
      </GridItem>

      <GridItem colSpan={[2, 2, 1, 1]}>
        <TravelItem image="/earth.svg">e mais...</TravelItem>
      </GridItem>
    </Grid>
  );
}
