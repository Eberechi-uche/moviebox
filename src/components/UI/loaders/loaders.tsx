import {
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";

export function CardLoader() {
  return (
    <>
      <Stack my={"4"} borderRadius={"9"}>
        <Skeleton
          w={{
            base: "150px",
            lg: "180px",
          }}
          minH={{
            base: "250px",
            lg: "300px",
          }}
          startColor="#BE123C"
          endColor="#171717"
        />
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
      </Stack>
    </>
  );
}

export function FullScreenLoader(props: { color: string }) {
  return (
    <>
      <Flex
        h={"100vh"}
        w={"100%"}
        justify={"center"}
        align={"center"}
        flexDir={"column"}
        bg={props.color}
        transition={"all 0.5s ease-in-out"}
      >
        <Image src={"/images/tv.png"} alt={"movie-box logo"} />
        <Text color={"#BE123C"} fontSize={"2xl"} fontWeight={"900"}>
          THE MOVIE BOX
        </Text>
      </Flex>
    </>
  );
}
