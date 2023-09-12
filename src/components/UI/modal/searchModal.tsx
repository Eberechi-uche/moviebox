import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "../icons/Icons";

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export default function SearchModal(props: SearchModalProps) {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size={"lg"}>
        <ModalOverlay bg={"#070505"} />
        <ModalContent w={"95%"}>
          <ModalBody>
            <Flex w={"100%"} px={"4"} py={"4"} flexDir={"column"}>
              <Flex align={"center"}>
                <SearchIcon color={"#BE123C"} />
                <Input border={"none"} focusBorderColor="white" mx={"2"} />
              </Flex>

              <Flex w={"100%"} my={"4"} align={"center"}>
                <Text fontSize={"xs"} fontWeight={"900"} mr={"2"}>
                  Genre:
                </Text>
                <Flex overflowX={"scroll"}>
                  <Flex>
                    <Button
                      borderRadius={"full"}
                      size={"xs"}
                      variant={"out"}
                      mx={"2"}
                      colorScheme={"red"}
                    >
                      Action
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
