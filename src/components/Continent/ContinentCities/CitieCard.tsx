import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function CitieCard() {
  return (
    <Flex bgColor="white" borderRadius="4px" direction="column">
      <Box as="header" h={["200px", "200px", "170px", "170px"]}>
        <Image
          src="/africa2.jpg"
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
            Londres
          </Heading>

          <Text
            fontWeight="medium"
            fontSize={["xs", "xs", "xs", "md"]}
            color="dark.info"
          >
            Reino Unido
          </Text>
        </Flex>

        <Box w="30px" h="30px" borderRadius="50%">
          <Image
            src="/england.png"
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
