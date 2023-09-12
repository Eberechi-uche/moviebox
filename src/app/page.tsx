import HomeHero from "@/components/UI/Hero/HeroHome";

import { MovieCard } from "@/components/UI/card/movieCard";
import { useEffect, useState } from "react";

async function getMovie() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_TOKEN}`,
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
