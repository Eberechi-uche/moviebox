"use client";
import { Flex, Text, Image } from "@chakra-ui/react";
import NavBar from "../navbar/Navbar";
import { RectangleIcon } from "../icons/Icons";
import { useEffect, useRef, useState } from "react";
import { CardData } from "../card/movieCard";

export default function HomeHero(props: { movies: CardData[] }) {
  const [currentView, setCurrentView] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentView < 4) {
        setCurrentView(currentView + 1);
        return;
      }
      if (currentView >= 4) {
        setCurrentView(0);
        return;
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentView]);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  });

  return (
    <>
      <Flex
        w={"100%"}
        h={"600px"}
        bg={"#000"}
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.7)) , url( https://www.themoviedb.org/t/p/original${
          screenWidth > 500
            ? props.movies[currentView].backdrop_path
            : props.movies[currentView].poster_path
        })`}
        bgSize={"cover"}
        transition={"all 1s ease-in"}
        flexDir={"column"}
      >
        <NavBar />
        <Flex
          w={"inherit"}
          pl={{
            base: "6",
            lg: "14",
          }}
          py={"24"}
          color={"#fff"}
          justify={"space-between"}
          pr={"4"}
          h={"100%"}
          align={"center"}
        >
          <Flex
            w={{
              base: "75%",
              lg: "30%",
            }}
            flexDir={"column"}
          >
            <Text
              fontSize={{
                base: "2xl",
                md: "4xl",
                lg: "3xl",
              }}
              fontWeight={"900"}
              color={"#BE123C"}
            >
              {props.movies[currentView].name ||
                props.movies[currentView].title}
            </Text>
            <Text
              fontSize={{
                base: "xs",
                lg: "sm",
              }}
            >
              {props.movies[currentView].overview}
            </Text>
          </Flex>
          <Flex flexDir={"column"} align={"flex-end"}>
            <SlideIndicator id={0} currentView={currentView} />
            <SlideIndicator id={1} currentView={currentView} />
            <SlideIndicator id={2} currentView={currentView} />
            <SlideIndicator id={3} currentView={currentView} />
            <SlideIndicator id={4} currentView={currentView} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

type SlideIndicatorProp = {
  id: number;
  currentView: number;
};

function SlideIndicator(props: SlideIndicatorProp) {
  return (
    <Flex
      align={"center"}
      color={props.id === props.currentView ? "#fff" : "#9ca3af"}
      key={props.id}
      transition={"all 0.2s ease-in-out"}
    >
      {props.id === props.currentView && (
        <RectangleIcon color={"#fff"} fontSize={"10px"} />
      )}

      <Text
        fontSize={props.id === props.currentView ? "12px" : "10px"}
        fontWeight={"900"}
      >
        {props.id + 1}
      </Text>
    </Flex>
  );
}
