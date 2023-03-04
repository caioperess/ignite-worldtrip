import { Flex, Image, Icon, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiChevronLeft } from "react-icons/fi";

export function Header() {
  const { asPath } = useRouter();
  const isHomePage = asPath === "/";

  return (
    <SimpleGrid
      as="header"
      maxW={1160}
      h="100px"
      mx="auto"
      gridTemplateColumns="1fr 1fr 1fr"
      alignItems="center"
      justifyContent="center"
    >
      {!isHomePage && (
        <Link href="/">
          <Icon as={FiChevronLeft} w="32px" h="32px" />
        </Link>
      )}

      <Image src="/logo.svg" justifySelf="center" gridColumn="2" />
    </SimpleGrid>
  );
}
