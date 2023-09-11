import { Flex, Text } from "@chakra-ui/react";

export default function HomeHero() {
  return (
    <>
      <Flex w={"100%"}>
        <Flex w={"inherit"}>
          <Flex w={"40%"}>
            <Text>John wick parabellum</Text>
            <Text></Text>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
    </>
  );
}
