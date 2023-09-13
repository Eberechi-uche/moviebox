"use client";

import MovieHero from "@/components/UI/Hero/MovieIDHero";
import { CardData, MovieCard } from "@/components/UI/card/movieCard";
import { CardLoader } from "@/components/UI/loaders/loaders";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { options } from "@/components/API/apiEndpoint";

export default function MovieDetail() {
  const [movie, setMovieList] = useState<CardData>();
  const [recommendation, setRecommendations] = useState<CardData[]>();
  const [loading, setLoading] = useState("movie-details");
  const { typeId, detailsID } = useParams();

  function getMovie() {
    fetch(
      `https://api.themoviedb.org/3/${typeId}/${detailsID}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieList(response as CardData);
        setLoading("recom");
        getRecommendation();
      })
      .catch((err) => {
        throw new Error("Failed to fetch data");
      });
  }

  function getRecommendation() {
    fetch(
      `https://api.themoviedb.org/3/${typeId}/${detailsID}/recommendations?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setLoading("done");
        setRecommendations(response.results as CardData[]);
      })
      .catch((err) => {
        throw new Error("Failed to fetch data");
      });
    setLoading("done");
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <main>
      {loading !== "movie-details" && movie && (
        <MovieHero
          poster={movie?.poster_path}
          overView={movie.overview}
          backdrop={movie.backdrop_path}
          title={movie.name || movie.title}
          release={movie.release_date || movie.first_air_date}
          runTime={movie.runtime || "none"}
        />
      )}

      {loading !== "done" ? (
        <SimpleGrid
          columns={[2, 3, 5]}
          w={"100%"}
          placeItems={"center"}
          py={"9"}
        >
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
        </SimpleGrid>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
}
