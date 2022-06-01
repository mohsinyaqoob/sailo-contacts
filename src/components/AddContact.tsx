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

const AddContact = ({ isOpen, onClose }) => {
  const handleSubmit = () => {};
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <form onSubmit={() => alert()}>
        <ModalContent>
          <ModalHeader>Add Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Add a new contact to your contact list
            </Text>
            <VStack gap={2}>
              <FormControl>
                <Input id="name" type="text" placeholder="Full name" />
              </FormControl>
              <FormControl>
                <Input id="email" type="text" placeholder="Email" />
              </FormControl>
              <FormControl>
                <Input id="phone" type="text" placeholder="Phone" />
              </FormControl>
              <FormControl>
                <Input id="designation" type="text" placeholder="Designation" />
              </FormControl>
              <FormControl>
                <Input id="department" type="text" placeholder="Department" />
              </FormControl>
              <FormControl>
                <Input id="group" type="text" placeholder="Group" />
              </FormControl>
              <FormControl>
                <Input id="picture" type="text" placeholder="Picture URL" />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant={"ghost"} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" colorScheme="blue">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddContact;
