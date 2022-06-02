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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import { Contact } from "../types/contact";
import { getContacts, SaveContact } from "../utils";

const EditContact = ({ isOpen, onClose, setReload, reload, contact }) => {
  const [formData, setFormData]: any = useState({
    name: "Sample User",
    email: "sample-user@sample-org.com",
    phone: "777777777",
    designation: "Software Engineer",
    department: "Engineering",
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
      const contacts = getContacts();
      const id: number = contacts.length + 1;
      const newContact: Contact = {
        id,
        ...formData,
      };

      SaveContact(newContact);
      setReload(!reload);

      toast({
        title: "Contact added",
        status: "success",
        position: "top-right",
      });
      onClose();
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      // onCloseComplete={() =>
      //   setFormData({
      //     name: "",
      //     email: "",
      //     phone: "",
      //     designation: "",
      //     department: "",
      //     group: "Alpha Reds",
      //     picture: "https://randomuser.me/api/portraits/women/37.jpg",
      //   })
      // }
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
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="phone"
                  name="phone"
                  type="number"
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

export default EditContact;
