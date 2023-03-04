import { Flex, Text } from "@chakra-ui/react";

type SlideProps = {
  bgImage: string;
  title: string;
  paragraph: string;
};

export function ImageSlide({ bgImage, paragraph, title }: SlideProps) {
  return (
    <Flex
      h="450px"
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      justify="center"
      align="center"
      gap="1rem"
      direction="column"
    >
      <Text
        fontWeight="bold"
        color="light.text"
        fontSize={["lg", "3xl", "4xl", "5xl"]}
      >
        {title}
      </Text>

      <Text
        fontWeight="bold"
        color="light.text"
        fontSize={["sm", "md", "xl", "2xl"]}
      >
        {paragraph}
      </Text>
    </Flex>
  );
}
