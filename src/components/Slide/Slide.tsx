import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

type SlideProps = {
  bgImage: string;
  title: string;
  paragraph: string;
  slug: string;
};

export function ImageSlide({ bgImage, paragraph, title, slug }: SlideProps) {
  const router = useRouter();

  return (
    <Flex
      h="450px"
      bgImage={`${bgImage}`}
      bgSize="cover"
      bgRepeat="no-repeat"
      justify="center"
      align="center"
      gap="1rem"
      direction="column"
    >
      <Text
        as="a"
        fontWeight="bold"
        color="light.text"
        fontSize={["lg", "3xl", "4xl", "5xl"]}
        onClick={() => router.push(`/continent/${slug}`)}
        cursor="pointer"
      >
        {title}
      </Text>

      <Text
        fontWeight="bold"
        color="light.text"
        textAlign="center"
        fontSize={["sm", "md", "xl", "2xl"]}
        w="70%"
      >
        {paragraph}
      </Text>
    </Flex>
  );
}
