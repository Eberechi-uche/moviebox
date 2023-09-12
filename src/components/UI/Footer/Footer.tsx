import { Flex, Image, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Flex
        h={"30vh"}
        bg={"black"}
        px={"9"}
        py={"4"}
        flexDir={"column"}
        color={"#9ca3af"}
        fontWeight={"900"}
      >
        <Flex>
          <Image
            src={"/TMDB.svg"}
            alt="TDMB"
            boxSize={"105px"}
            objectFit={"contain"}
          />
        </Flex>
        <Flex>
          <Text>UI Design by Adriana Eka Prayudha</Text>
        </Flex>
        <Text> © 2023 </Text>
      </Flex>
    </>
  );
}
