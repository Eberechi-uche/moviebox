import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  Flex,
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
        <ModalOverlay bg={"#000"} />
        <ModalContent>
          <ModalBody>
            <Flex align={"center"} w={"100%"} px={"4"} py={"4"}>
              <SearchIcon color={"#BE123C"} />
              <Input border={"none"} focusBorderColor="white" mx={"2"} />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
