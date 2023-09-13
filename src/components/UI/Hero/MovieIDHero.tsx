import { Flex, Text, Image } from "@chakra-ui/react";
import { PlayIcon } from "../icons/Icons";

import NavBar from "../navbar/Navbar";

export default function MovieHero(props: {
  overView: string;
  title: string;
  backdrop: string;
  poster: string;
  runTime: string;
  release: string;
}) {
  return (
    <Flex
      minH={"600px"}
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.7)) , url(https://www.themoviedb.org/t/p/original/${props.backdrop})`}
      py={"9"}
      bgSize={"cover"}
      w={"100%"}
      flexDir={"column"}
    >
      <NavBar />
      <Flex
        w={{
          base: "100%",
          md: "100%",
          lg: "60%",
        }}
        flexDir={{
          base: "column",
          lg: "row",
        }}
        justify={"space-between"}
        px={"8"}
      >
        <Image
          src={`https://www.themoviedb.org/t/p/original/${props.poster}`}
          borderRadius={"16px"}
          objectFit={"cover"}
          h={{
            base: "200px",
            lg: "400px",
          }}
          w={{
            base: "150px",
            lg: "280px",
          }}
          boxShadow={"lg"}
          mr={"12"}
        />
        <Flex>
          <Flex color={"#fff"} flexDir={"column"}>
            <Text
              fontSize={{
                base: "2xl",
                md: "3xl",
                lg: "4xl",
              }}
              fontWeight={"900"}
              data-testid="movie-title"
              textTransform={"capitalize"}
              color={"#BE123C"}
            >
              {props.title}
            </Text>
            <Flex textTransform={"capitalize"} my={6}>
              <Text fontSize={"xs"} data-testid="release-date">
                {props.release}
              </Text>
              <Text mx={"4"} fontSize={"xs"} data-testid="movie-runtime">
                {props.runTime} mins
              </Text>
              <Flex align={"center"}>
                <PlayIcon color={"red"} />
                <Text mx={"1"} fontSize={"xs"}>
                  play trailer
                </Text>
              </Flex>
            </Flex>

            <Text
              fontSize={{
                base: "xl",
                md: "2xl",
                lg: "3xl",
              }}
              fontWeight={"900"}
              mt={{
                lg: "12",
              }}
              textTransform={"capitalize"}
            >
              overview
            </Text>
            <Text fontSize={"xs"} data-testid="movie-overview">
              {props.overView}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
