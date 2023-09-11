"use client";
import { Flex, Text, Image } from "@chakra-ui/react";
import NavBar from "../navbar/Navbar";
import { RectangleIcon } from "../icons/Icons";
import { useEffect, useState } from "react";
let view = 0;
export default function HomeHero() {
  const [currentView, setCurrentView] = useState(0);
  const movieArray = ["#000", "blue.500", "yellow.500", "green.500", "red.500"];
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
        bg={movieArray[currentView]}
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
            >
              <Flex align={"center"}>
                <Image src="/images/IMDB.png" objectFit={"contain"} />
                <Text mx={"2"}> 10</Text>
              </Flex>
              <Flex align={"center"}>
                <Image src="/images/rotten-tomato.png" objectFit={"contain"} />
                <Text mx={"2"}> 10</Text>
              </Flex>
            </Flex>
            <Text
              fontSize={{
                base: "sm",
                lg: "sm",
              }}
            >
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
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
