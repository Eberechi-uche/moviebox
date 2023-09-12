import HomeHero from "@/components/UI/Hero/HeroHome";

import { MovieCard } from "@/components/UI/card/movieCard";
import { useEffect, useState } from "react";

async function getMovie() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNWRlMzY3MTU4Yzk4ZGI3NjMyYTBjOWRjNjQ1ZiIsInN1YiI6IjY0ZmY1YzQyMmRmZmQ4MDEzYmNkM2UxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BBxbH3KUC-r7zJeNxOGNQO2bZgocwefZzHTJ_N3_yYA",
    },
  };
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    options
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(res.json());
}

export default async function Home() {
  getMovie();
  return (
    <main>
      <HomeHero movies={[]} />
      {/* {movieList.length > 0 && movieList.map((item: any) => (
        <p> {item.title}</p>
      ))} */}
    </main>
  );
}
