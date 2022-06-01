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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import { Contacts } from "../data/contacts";
import { Contact } from "../types/contact";

const AddContact = ({ isOpen, onClose }) => {
  const [formData, setFormData]: any = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
    group: "Alpha Reds",
    picture: "https://randomuser.me/api/portraits/women/37.jpg",
  });

  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate
    let isValid = true;
    for (const prop in formData) {
      if (formData[prop] == "") {
        isValid = false;
        toast({
          title: `Field ${prop} is required`,
          status: "error",
          position: "top-right",
        });
      }
    }

    if (isValid) {
      // Add to list
      // Get last id
      const id: number = Contacts.length + 1;
      const newContact: Contact = {
        id,
        ...formData,
      };
      Contacts.push(newContact);
      onClose();
      toast({
        title: "Contact added",
        status: "success",
        position: "top-right",
      });
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onCloseComplete={() => setFormData({})}
    >
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
