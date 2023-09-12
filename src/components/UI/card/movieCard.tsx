import { Flex, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
export type CardData = {
  id: 346698;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: 3534.928;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: 7.3;
  vote_count: 4157;
  name: string;
  first_air_date: string;
  backdrop_path: string;
};
export function MovieCard(props: {
  title: string;
  media: string;
  poster: string;
  id: number;
  release: string;
}) {
  const route = useRouter();
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
      onClick={() => {
        route.push(`/${props.media}/${props.id}`);
      }}
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
          src={`https://www.themoviedb.org/t/p/original/${props.poster}`}
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
        <Text data-testid="movie-release-date" fontSize={"xs"}>
          {props.release}
        </Text>
        <Text
          fontWeight={"700"}
          color={"#fff"}
          py={"1"}
          fontSize={"md"}
          data-testid="movie-title"
        >
          {props.title}
        </Text>
      </Flex>
    </Flex>
  );
}
