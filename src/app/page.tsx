"use client";

import HomeHero from "@/components/UI/Hero/HeroHome";
import { CardData, MovieCard } from "@/components/UI/card/movieCard";
import { Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNWRlMzY3MTU4Yzk4ZGI3NjMyYTBjOWRjNjQ1ZiIsInN1YiI6IjY0ZmY1YzQyMmRmZmQ4MDEzYmNkM2UxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BBxbH3KUC-r7zJeNxOGNQO2bZgocwefZzHTJ_N3_yYA",
  },
};

export default function Home() {
  const [movieList, setMovieList] = useState<CardData[]>([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieList(response.results as CardData[]);
      })
      .catch((err) => {
        throw new Error("Failed to fetch data");
      });
  }, []);
  return (
    <main>
      {movieList.length < 0 && (
        <Flex
          h={"100vh"}
          w={"100%"}
          justify={"center"}
          align={"center"}
          flexDir={"column"}
        >
          <Image src={"/images/tv.png"} alt={"movie-box logo"} />
          <Text color={"#BE123C"} fontSize={"2xl"} fontWeight={"900"}>
            THE MOVIE BOX
          </Text>
        </Flex>
      )}

      {movieList.length && <HomeHero movies={movieList.slice(5)} />}
      <Flex px={"4"} pt={16} pb={"4"}>
        <Text fontWeight={"900"} color={"#BE123C"} fontSize={"x-large"}>
          Trending
        </Text>
      </Flex>

      <SimpleGrid columns={[2, 3, 5]} w={"100%"} placeItems={"center"}>
        {movieList.length > 1 &&
          movieList.map((item) => (
            <Flex key={item.id}>
              <MovieCard
                title={item.title || item.name}
                media={item.media_type}
                id={item.id}
                poster={item.poster_path}
                release={item.release_date || item.first_air_date}
              />
            </Flex>
          ))}
      </SimpleGrid>
    </main>
  );
}
