import HomeHero from "@/components/UI/Hero/HeroHome";
import MovieHero from "@/components/UI/Hero/MovieIDHero";
import NavBar from "@/components/UI/navbar/Navbar";

export default function Home() {
  return (
    <main>
      {/* <HomeHero /> */}
      <MovieHero />
      <p> the movie box</p>
    </main>
  );
}
