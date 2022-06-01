import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

const DeleteContact = ({ isOpen, onClose }) => {
  const handleSubmit = () => {};
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <form onSubmit={() => alert()}>
        <ModalContent>
          <ModalHeader>Do you want to Delete this item</ModalHeader>
          <ModalCloseButton />
         

          <ModalFooter>
          <Button type="submit" colorScheme="blue">
               yes
            </Button>
            <Button variant={"ghost"} mr={3} onClick={onClose}>
              No
            </Button>
         
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default DeleteContact;
