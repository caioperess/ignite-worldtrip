import { Flex, SimpleGrid, Text, Icon } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

export function ContinentDescription() {
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
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
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
            50
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
            60
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
            27
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
