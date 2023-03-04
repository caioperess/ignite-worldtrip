import { Flex, Image, Text } from "@chakra-ui/react";

type TravelItemProps = {
  image: string;
  children: string;
};

export function TravelItem({ children, image }: TravelItemProps) {
  return (
    <Flex align="center" justify="center" direction="column" gap="6">
      <Image
        src={image}
        w={["45px", "65px", "65px", "85px"]}
        h={["45px", "65px", "65px", "85px"]}
      />
      <Text
        fontWeight="semibold"
        textAlign="center"
        fontSize={["md", "lg", "xl", "2xl"]}
      >
        {children}
      </Text>
    </Flex>
  );
}
