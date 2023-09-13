"use client";

import HomeHero from "@/components/UI/Hero/HeroHome";
import { CardData, MovieCard } from "@/components/UI/card/movieCard";
import { FullScreenLoader } from "@/components/UI/loaders/loaders";
import { Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { options } from "@/components/API/apiEndpoint";

export default function Home() {
  const [movieList, setMovieList] = useState<CardData[]>([]);
  const [loading, setLoading] = useState("black");
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setMovieList(response.results as CardData[]);
        setLoading("done");
      })
      .catch((err) => {
        throw new Error("Failed to fetch data");
      });
  }, []);
  return (
    <>
      {loading !== "done" && <FullScreenLoader color={loading} />}
      {loading === "done" && (
        <main>
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
      )}
    </>
  );
}
