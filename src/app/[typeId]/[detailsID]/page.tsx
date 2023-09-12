"use client";

import MovieHero from "@/components/UI/Hero/MovieIDHero";
import { CardData, MovieCard } from "@/components/UI/card/movieCard";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNWRlMzY3MTU4Yzk4ZGI3NjMyYTBjOWRjNjQ1ZiIsInN1YiI6IjY0ZmY1YzQyMmRmZmQ4MDEzYmNkM2UxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BBxbH3KUC-r7zJeNxOGNQO2bZgocwefZzHTJ_N3_yYA",
  },
};
export default function MovieDetail() {
  const [movie, setMovieList] = useState<CardData>();
  const [recommendation, setRecommendations] = useState<CardData[]>();
  const { typeId, detailsID } = useParams();
  console.log(typeId, detailsID);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${typeId}/${detailsID}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieList(response as CardData);
      })
      .catch((err) => {
        throw new Error("Failed to fetch data");
      });
    fetch(
      `https://api.themoviedb.org/3/${typeId}/${detailsID}/similar?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setRecommendations(response.results as CardData[]);
      })
      .catch((err) => {
        throw new Error("Failed to fetch data");
      });
  }, []);
  return (
    <main>
      {movie && (
        <MovieHero
          poster={movie?.poster_path}
          overView={movie.overview}
          backdrop={movie.backdrop_path}
          title={movie.name || movie.title}
          release={movie.release_date || movie.first_air_date}
          runTime={movie.runtime || "none"}
        />
      )}
      <Flex px={"4"} pt={16} pb={"4"}>
        <Text fontWeight={"900"} color={"#BE123C"} fontSize={"x-large"}>
          more like {movie?.name || movie?.title}
        </Text>
      </Flex>
      <SimpleGrid columns={[2, 3, 5]} w={"100%"} placeItems={"center"}>
        {recommendation &&
          recommendation.map((item) => (
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
