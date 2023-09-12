"use client";
import { Flex, Text, Image } from "@chakra-ui/react";
import NavBar from "../navbar/Navbar";
import { RectangleIcon } from "../icons/Icons";
import { useEffect, useState } from "react";

export default function HomeHero() {
  const [currentView, setCurrentView] = useState(0);
  const movieArray = [
    {
      img: "/vanNED66ty4Kc45IMcGI7edQBwH.jpg",
      imgMini: "/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    },
    {
      img: "/aRKQdF6AGbhnF9IAyJbte5epH5R.jpg",
      imgMini: "/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    },
    {
      img: "/2ii07lSwHarg0gWnJoCYL3Gyd1j.jpg",
      imgMini: "/n1hqbSCtyBAxaXEl1Dj3ipXJAJG.jpg",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    },
    {
      img: "/9m161GawbY3cWxe6txd1NOHTjd0.jpg",
      imgMini: "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    },
    {
      img: "/qy5Hokv4eOQgSOVZLL9eAVDmRA2.jpg",
      imgMini: "/kGENInUWI9tRVg4ae8XAVgAWpEi.jpg",
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
  const screenWidth = window.innerWidth;
  return (
    <>
      <Flex
        w={"100%"}
        h={"600px"}
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.7)) , url( https://www.themoviedb.org/t/p/w1280${
          screenWidth < 700
            ? movieArray[currentView].imgMini
            : movieArray[currentView].img
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
            <Text
              fontSize={{
                base: "xs",
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
