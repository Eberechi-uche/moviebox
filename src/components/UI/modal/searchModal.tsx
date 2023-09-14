import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  Flex,
  Button,
  Text,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { SearchIcon } from "../icons/Icons";
import { Dispatch, SetStateAction, useState } from "react";
import { CardData, MovieCardMini } from "../card/movieCard";
import { options } from "@/components/API/apiEndpoint";
type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export default function SearchModal(props: SearchModalProps) {
  const [input, setInput] = useState("");
  const [searchType, setSearchType] = useState("movie");
  const [searchList, setSearchList] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(false);

  function getList() {
    setInput("");
    setLoading(true);

    if (input.length == 0) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/${searchType}?query=${input}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setSearchList(response.results as CardData[]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throw new Error("error fetching data");
      });
  }

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={{
          base: "sm",
          md: "lg",
        }}
      >
        <ModalOverlay bg={"#070505"} />
        <ModalContent
          w={"95%"}
          bg={searchType !== "movie" ? "#BE123C" : "#171717"}
          transition={"background 0.5s ease-in"}
        >
          <Flex p={"6"} w={"100%"}>
            <Text
              fontWeight={"900"}
              color={searchType == "movie" ? "#BE123C" : "whiteAlpha.500"}
              mr={"4"}
              onClick={() => {
                setSearchType("movie");
              }}
              cursor={"pointer"}
            >
              movies
            </Text>
            <Text
              fontWeight={"900"}
              onClick={() => {
                setSearchType("tv");
              }}
              color={searchType == "tv" ? "#171717" : "whiteAlpha.500"}
              cursor={"pointer"}
            >
              tv
            </Text>
          </Flex>
          <ModalBody color={"#f2f2f2"} overflowY={"scroll"} maxH={"60vh"}>
            <Search
              input={input}
              setInput={setInput}
              searchType={searchType}
              getList={getList}
              loading={loading}
            />
            <Flex w={"100%"} flexDir={"column"}>
              {!loading &&
                searchList.length > 0 &&
                searchList.map((item) => (
                  <MovieCardMini
                    poster={item.poster_path}
                    title={item.name || item.title}
                    key={item.id}
                    id={item.id}
                    media={searchType}
                    release={item.first_air_date || item.release_date}
                    overview={item.overview}
                  />
                ))}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
function Search(props: {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  searchType: string;
  getList: () => void;
  loading: boolean;
}) {
  return (
    <>
      <Flex
        w={"100%"}
        px={"4"}
        py={"1"}
        flexDir={"column"}
        border={"2px solid"}
        borderColor={props.searchType == "movie" ? "#BE123C" : "#171717"}
        borderRadius={"full"}
      >
        <Flex align={"center"}>
          <SearchIcon
            color={props.searchType == "movie" ? "#BE123C" : "#171717"}
          />
          <Input
            w={"100%"}
            focusBorderColor={
              props.searchType !== "movie" ? "#BE123C" : "#171717"
            }
            placeholder={
              props.searchType == "movie" ? "search movie" : "search series"
            }
            border={"none"}
            mx={"2"}
            _placeholder={{
              color: "#fafafa",
            }}
            value={props.input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.setInput(e.target.value);
            }}
          />
          {props.loading ? (
            <Spinner size={"sm"} />
          ) : (
            <Box fontWeight={"900"} cursor={"pointer"} onClick={props.getList}>
              search
            </Box>
          )}
        </Flex>
      </Flex>
    </>
  );
}
