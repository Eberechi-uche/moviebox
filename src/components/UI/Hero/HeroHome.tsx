"use client";
import { Flex, Text, Image } from "@chakra-ui/react";
import NavBar from "../navbar/Navbar";
import { RectangleIcon } from "../icons/Icons";
import { useEffect, useState } from "react";

export default function HomeHero() {
  const [currentView, setCurrentView] = useState(0);
  const movieArray = [
    {
      img: "https://www.themoviedb.org/t/p/w1280/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    },
    {
      img: "https://www.themoviedb.org/t/p/w1280/jP2ik17jvKiV5sGEknMFbZv7WAe.jpg",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    },
    {
      img: "https://www.themoviedb.org/t/p/w1280/qmevjlNDaWoEughGlXFWHbQ4TaR.jpg",
      overview:
        "Until now, the Justice League has been a loose association of superpowered individuals. But when they are swept away to Warworld, a place of unending brutal gladiatorial combat, Batman, Superman, Wonder Woman and the others must somehow unite to form an unbeatable resistance able to lead an entire planet to freedom.",
    },
    {
      img: "https://www.themoviedb.org/t/p/w1280/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    },
    {
      img: "https://www.themoviedb.org/t/p/w1280/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    },
    {
      img: "https://www.themoviedb.org/t/p/w1280/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    },
  ];
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

  return (
    <>
      <Flex
        w={"100%"}
        h={"600px"}
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.7)) , url(${movieArray[currentView].img})`}
        bgSize={"cover"}
        transition={"all 0.5s ease-in-out"}
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
                lg: "5xl",
              }}
              fontWeight={"700"}
            >
              John wick 3 : parabellum
            </Text>
            <Flex
              py={"5"}
              w={"70%"}
              align={"center"}
              justify={"space-between"}
              fontSize={"xs"}
              fontWeight={"900"}
            >
              <Flex align={"center"}>
                <Image
                  src="/images/IMDB.png"
                  objectFit={"contain"}
                  alt={"IMDB"}
                />
                <Text mx={"2"}> 10</Text>
              </Flex>
              <Flex align={"center"}>
                <Image
                  src="/images/rotten-tomato.png"
                  objectFit={"contain"}
                  alt={"rotten tomato"}
                />
                <Text mx={"2"}> 10</Text>
              </Flex>
            </Flex>
            <Text
              fontSize={{
                base: "sm",
                lg: "sm",
              }}
            >
              {movieArray[currentView].overview}
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
