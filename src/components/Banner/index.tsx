import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      h={["270px", "315px", "335px"]}
      bgImage="url(/background.png)"
      bgSize="cover"
      p="4"
    >
      <Flex
        maxW={1160}
        h="100%"
        align="center"
        justify="space-between"
        mx="auto"
      >
        <Box>
          <Heading
            as="h2"
            fontWeight="medium"
            fontSize={["md", "2xl", "3xl", "4xl"]}
            color="light.text"
            lineHeight="inherit"
            textAlign={["center", "center", "left", "left"]}
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text
            as="p"
            mt="5"
            maxW={{ base: "100%", md: "85%", lg: "524px" }}
            fontWeight="normal"
            fontSize={["sm", "md", "lg", "xl"]}
            color="light.text"
            textAlign={["center", "center", "left", "left"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Box boxSize="sm" pos="relative" display={["none", "none", "block"]}>
          <Image
            src="/airplane.svg"
            pos="absolute"
            bottom={["39px", "39px", "0", "0"]}
          />
        </Box>
      </Flex>
    </Box>
  );
}
