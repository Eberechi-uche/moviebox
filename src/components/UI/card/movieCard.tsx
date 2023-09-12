import { Flex, Text, Image } from "@chakra-ui/react";

export function MovieCard(props: {
  title: string;
  media: string;
  poster: string;
  id: number;
  release: string;
}) {
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
      key={props.id}
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
        {props.media}
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
          src={`https://www.themoviedb.org/t/p/w1280/${props.poster}`}
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
        <Text data-testid="movie-release-date"> {props.release}</Text>
        <Text
          fontWeight={"700"}
          fontSize={"xs"}
          color={"#111827"}
          py={"1"}
          data-testid="movie-title"
        >
          {props.title}
        </Text>
      </Flex>
    </Flex>
  );
}
