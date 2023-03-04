import { Flex, FlexProps } from "@chakra-ui/react";

interface FlexContainerProps extends FlexProps {
  children: React.ReactNode;
}

export function FlexContainer({ children, ...rest }: FlexContainerProps) {
  return (
    <Flex maxW={1160} mx="auto" {...rest}>
      {children}
    </Flex>
  );
}
