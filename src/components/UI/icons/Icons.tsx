import { Flex, Icon } from "@chakra-ui/react";

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
