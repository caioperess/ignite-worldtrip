import { CitiesListProps } from "@/dtos/continent";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

type CitieCardProps = {
  city: CitiesListProps;
};

export function CitieCard({ city }: CitieCardProps) {
  return (
    <Flex bgColor="white" borderRadius="4px" direction="column">
      <Box as="header" h={["200px", "200px", "170px", "170px"]}>
        <Image
          src={city.thumb}
          objectFit="cover"
          w="100%"
          h="100%"
          borderRadius="4px 4px 0 0"
        />
      </Box>

      <Flex
        p="5"
        align="center"
        justify="space-between"
        border="1px"
        borderColor="yellow.450"
        borderTop="0"
      >
        <Flex direction="column" align="flex-start" gap="0.75rem">
          <Heading
            fontWeight="semibold"
            fontSize={["sm", "md", "lg", "xl"]}
            as="h3"
          >
            {city.title}
          </Heading>

          <Text
            fontWeight="medium"
            fontSize={["xs", "xs", "xs", "md"]}
            color="dark.info"
          >
            {city.country}
          </Text>
        </Flex>

        <Box w="30px" h="30px" borderRadius="50%">
          <Image
            src={city.flag}
            w="100%"
            h="100%"
            borderRadius="50%"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
