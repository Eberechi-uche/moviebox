import { Flex, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { MovieCardMini, MovieCardMiniProps } from "../card/movieCard";

export function SearchIcon(props: any) {
  return (
    <>
      <Icon fontSize={"13px"}>
        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 13L9 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"
            stroke={props.color || "white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Icon>
    </>
  );
}
export function RectangleIcon(props: any) {
  return (
    <Icon {...props}>
      <svg
        // width="20"
        // height="3"
        viewBox="0 0 20 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="4" rx="1.5" fill={props.color} />
      </svg>
    </Icon>
  );
}
export function PlayIcon(props: any) {
  return (
    <Icon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z"
          stroke={props.color || "#111827"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke={props.color || "#111827"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
}
export function HeartIcon(props: MovieCardMiniProps) {
  const [liked, setLiked] = useState(false);
  const toast = useToast();
  const toastValue = liked
    ? "Removed from  your favourites"
    : "Added to your favouties";
  return (
    <Flex
      bg={"whiteAlpha.700"}
      color={"#fff"}
      p={"1"}
      borderRadius={"full"}
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
        setLiked(!liked);
        toast({
          render: () => <MovieCardMini {...props} overview={toastValue} />,
          duration: 2000,
          position: "top",
        });
      }}
    >
      {!liked ? (
        <Icon>
          <svg
            // width="24"
            // height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Icon>
      ) : (
        <Icon>
          <svg
            // width="30"
            // height="30"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.17169 5.17157C4.73379 3.60948 7.26645 3.60948 8.82854 5.17157L10.0001 6.34315L11.1717 5.17157C12.7338 3.60948 15.2664 3.60948 16.8285 5.17157C18.3906 6.73367 18.3906 9.26633 16.8285 10.8284L10.0001 17.6569L3.17169 10.8284C1.6096 9.26633 1.6096 6.73367 3.17169 5.17157Z"
              fill="#BE123C"
            />
          </svg>
        </Icon>
      )}
    </Flex>
  );
}
