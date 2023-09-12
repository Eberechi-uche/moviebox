import { Flex, Text, Image } from "@chakra-ui/react";

export function MovieCard() {
  return (
    <Flex
      w={{
        base: "170px",
        lg: "170px",
      }}
      minH={{
        base: "250px",
        lg: "300px",
      }}
      flexDir={"column"}
      data-testid="movie-card"
    >
      <Flex h={"70%"} w={"100%"}>
        <Image
          alt="movie-name"
          src={
            "https://www.themoviedb.org/t/p/w1280/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
          }
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
          data-testid="movie-poster"
        />
      </Flex>
      <Flex
        flexDir={"column"}
        w={"100%"}
        py={"4"}
        fontSize={"xs"}
        fontWeight={"900"}
        color={"#9ca3af"}
      >
        <Text data-testid="movie-release-date">USA, 2023</Text>
        <Text
          fontWeight={"700"}
          fontSize={"xs"}
          color={"#111827"}
          py={"1"}
          data-testid="movie-title"
        >
          Shang-Chi and the Legend of the Ten Rings
        </Text>
        <Flex
          align={"center"}
          fontWeight={"700"}
          color={"#111827"}
          fontSize={"xs"}
          w={"100%"}
          justify={"space-between"}
          py={"1"}
        >
          <Flex align={"center"}>
            <Image
              src="/images/IMDB.png"
              boxSize={"10px"}
              alt="IMDB"
              objectFit={"cover"}
            />
            <Text ml={"2"}>10</Text>
          </Flex>
          <Flex align={"center"}>
            <Image
              src="/images/rotten-tomato.png"
              boxSize={"10px"}
              alt="rotten tomato"
              objectFit={"cover"}
            />
            <Text ml={"2"}>10</Text>
          </Flex>
        </Flex>
        <Flex fontSize={"xx-small"}>
          <Text>Tags</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
