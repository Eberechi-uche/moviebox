"use client";

import { Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { SearchIcon } from "../icons/Icons";
import SearchModal from "../modal/searchModal";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <Flex
        w={"100%"}
        px={{
          base: "6",
          lg: "14",
        }}
        py={"6"}
      >
        <Flex justify={"space-between"} w={"100%"} align={"center"}>
          <Link href={"/"}>
            <Flex align={"center"}>
              <Image
                src={"/images/tv.png"}
                boxSize={"30px"}
                boxShadow={"base"}
                borderRadius={"full"}
              />
              <Text
                mx={"2"}
                display={{
                  base: "none",
                  lg: "unset",
                }}
                fontWeight={"900"}
                color={"#fff"}
              >
                Movie Box
              </Text>
            </Flex>
          </Link>
          <SearchBar />
          {/* <Flex>
            <Text>sign in</Text>
          </Flex> */}
        </Flex>
      </Flex>
    </>
  );
}

function SearchBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        alignItems={"center"}
        w={{
          base: "fit-content",
          md: "40%",
          lg: "60%",
        }}
        justify={"space-between"}
        px={"6"}
        border={"2px solid"}
        borderColor={"#fff"}
        py={"2"}
        borderRadius={"full"}
        color={"#fff"}
        onClick={onOpen}
      >
        <Text
          mx={"3"}
          fontSize={"sm"}
          display={{
            base: "none",
            md: "unset",
          }}
        >
          what do you want to watch
        </Text>

        <SearchIcon />
      </Flex>
      {isOpen && <SearchModal onClose={onClose} isOpen={isOpen} />}
    </>
  );
}
