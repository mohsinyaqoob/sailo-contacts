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
  Toast,
  UseDisclosureProps,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { deleteContact } from "../utils";

type DeleteContactProps = {
  isOpen: UseDisclosureProps;
  onClose: UseDisclosureProps;
  reload: boolean;
  setReload: Function;
};

const DeleteContact = ({ isOpen, onClose, reload, setReload, contact }) => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteContact(contact.id);
    setReload(!reload);
    onClose();

    toast({
      title: `${contact.name} was deleted`,
      status: "success",
      position: "top-right",
    });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <form onSubmit={handleSubmit}>
        <ModalContent>
          <ModalHeader>Delete Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Are you sure you want to delete this contact?
            </Text>
            <VStack gap={2}></VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant={"ghost"} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" colorScheme="red">
              Yes. I'm sure.
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default DeleteContact;
