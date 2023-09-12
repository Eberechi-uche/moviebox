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
