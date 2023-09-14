"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [frame, setFrame] = useState(0);
  const images = [
    "/images/404image.jpeg",
    "/images/pxfuel.jpg",
    "/images/404image2.jpg",
    "/images/404image3.jpg",
    "/images/404image5.webp",
    "/images/404image4.webp",
  ];

  const quotes = [
    "404",
    "the universe needed expression, and here you are",
    "patience makes you see wonders",
    " we live forever",
    "the universe is you playing games",
    "how can you be lost, you are everywhere",
  ];
  function animateFrame() {
    if (frame < 5) {
      setFrame(frame + 1);
      return;
    }
    if (frame >= 4) {
      setFrame(0);
    }
  }
  useEffect(() => {
    const interval = setInterval(animateFrame, 3000);

    return () => clearInterval(interval);
  });
  return (
    <>
      <Flex
        transition={"all 2s ease-in-out"}
        w={"100%"}
        h={"70vh"}
        bg={"#000"}
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.7)) , url(${images[frame]})`}
        bgSize={"cover"}
        bgPosition={"center"}
        flexDir={"column"}
        align={"center"}
        justify={"center"}
      >
        <Flex px={"6"} flexDir={"column"} w={"100%"} color={"#fff"} h={"50%"}>
          <Heading
            textTransform={"uppercase"}
            transition={"all 1s ease-in-out"}
          >
            {quotes[frame]}
          </Heading>
          <Link href={"/"}>
            <Flex fontWeight={"900"} py={"2"}>
              <Text> Go Home </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
