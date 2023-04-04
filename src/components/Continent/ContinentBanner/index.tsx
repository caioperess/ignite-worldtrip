import { ContinentProps } from "@/dtos/continent";
import { Box, Flex, Heading } from "@chakra-ui/react";

type ContinentBannerProps = {
  continent: ContinentProps;
};

export function ContinentBanner({ continent }: ContinentBannerProps) {
  return (
    <Flex
      h={["300px", "400px", "400px", "500px"]}
      align="flex-end"
      bgImage={continent.banner}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      p={["2", "6", "8", "14"]}
    >
      <Heading
        as="h1"
        color="light.text"
        textAlign="left"
        fontWeight="semibold"
        fontSize={["2xl", "3xl", "4xl", "5xl"]}
      >
        {continent.title}
      </Heading>
    </Flex>
  );
}
