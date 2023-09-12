import { Flex, Text, Image } from "@chakra-ui/react";

export function MovieCard() {
  return (
    <Flex
      w={{
        base: "150px",
        lg: "180px",
      }}
      minH={{
        base: "250px",
        lg: "300px",
      }}
      flexDir={"column"}
      data-testid="movie-card"
      pos={"relative"}
    >
      <Text
        position={"absolute"}
        top={"10px"}
        left={"10px"}
        fontWeight={"600"}
        bg={"whiteAlpha.700"}
        px={"2"}
        borderRadius={"2px"}
        fontSize={"sm"}
      >
        movie
      </Text>
      <Flex
        h={"70%"}
        w={"100%"}
        borderRadius={"10px"}
        boxShadow={"md"}
        overflow={"hidden"}
      >
        <Image
          alt="movie-name"
          src={
            "https://www.themoviedb.org/t/p/w1280/kdM24KINoAVK9wjCtDJCkdffEpc.jpg"
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
        <Text data-testid="movie-release-date"> 2023</Text>
        <Text
          fontWeight={"700"}
          fontSize={"xs"}
          color={"#111827"}
          py={"1"}
          data-testid="movie-title"
        >
          Shang-Chi and the Legend of the Ten Rings
        </Text>
      </Flex>
    </Flex>
  );
}
