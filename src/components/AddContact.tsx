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
import { useState } from "react";

const AddContact = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
    group: "Alpha Reds",
    picture: "https://randomuser.me/api/portraits/women/37.jpg",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Add Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Add a new contact to your contact list
            </Text>

            <VStack gap={2} align={"left"}>
              <FormControl>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="designation"
                  name="designation"
                  type="text"
                  placeholder="Designation"
                  onChange={handleChange}
                  value={formData.designation}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="department"
                  name="department"
                  type="text"
                  placeholder="Department"
                  onChange={handleChange}
                  value={formData.department}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="group"
                  name="group"
                  type="text"
                  placeholder="Group"
                  onChange={handleChange}
                  value={formData.group}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="picture"
                  name="picture"
                  type="text"
                  placeholder="Picture URL"
                  onChange={handleChange}
                  value={formData.picture}
                />
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
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AddContact;
