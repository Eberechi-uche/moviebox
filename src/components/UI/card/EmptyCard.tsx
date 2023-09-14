import { Flex, Text } from "@chakra-ui/react";

export function EmptyCard() {
  return (
    <>
      <Flex w={"100%"} py={"9"} px={"4"} fontWeight={"900"} color={"#fff"}>
        <Text>we got nothing</Text>
      </Flex>
    </>
  );
}
