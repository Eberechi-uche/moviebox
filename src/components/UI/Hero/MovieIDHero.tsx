import { Flex, Text, Image, SimpleGrid, Icon } from "@chakra-ui/react";
import { PlayIcon } from "../icons/Icons";
import { CardData } from "../card/movieCard";

export default function MovieHero(props: CardData) {
  return (
    <Flex
      minH={"550px"}
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.7)) , url(https://www.themoviedb.org/t/p/w1280/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg)`}
      p={9}
      bgSize={"cover"}
      w={"100%"}
    >
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
      >
        <Image
          src="https://www.themoviedb.org/t/p/w1280/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
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
                md: "4xl",
                lg: "5xl",
              }}
              fontWeight={"900"}
              data-testid="movie-title"
              textTransform={"capitalize"}
            >
              Blue Beetle
            </Text>
            <Flex textTransform={"capitalize"} my={6}>
              <Text
                fontWeight={"300"}
                fontSize={"xs"}
                data-testid="release-date"
              >
                release date
              </Text>
              <Text
                mx={"4"}
                fontWeight={"300"}
                fontSize={"xs"}
                data-testid="movie-runtime"
              >
                run time
              </Text>
              <Flex align={"center"}>
                <PlayIcon color={"red"} />
                <Text mx={"1"} fontWeight={"300"} fontSize={"xs"}>
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
              Recent college grad Jaime Reyes returns home full of aspirations
              for his future, only to find that home is not quite as he left it.
              As he searches to find his purpose in the world, fate intervenes
              when Jaime unexpectedly finds himself in possession of an ancient
              relic of alien biotechnology: the Scarab.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
