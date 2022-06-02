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
import { useEffect, useState } from "react";

import { Contact } from "../types/contact";
import { getContacts, SaveContact } from "../utils";

const EditContact = (props) => {
  const { isOpen, onClose, setReload, reload, contact  } = props;

  const [formData, setFormData]: any = useState({
    name:  "" ,
    email: "",
    phone: "",
    designation: "",
    department: "",
    group: "",
    picture: "",
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

  useEffect(() => {
    console.log(contact);
  }, []);

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
        <form onSubmit={() => {}}>
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
                  onChange={(e) => handleChange(e)}
                  value={formData.name}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => handleChange(e)}
                  value={formData.email}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="Phone"
                  onChange={(e) => handleChange(e)}
                  value={formData.phone}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="designation"
                  name="designation"
                  type="text"
                  placeholder="Designation"
                  onChange={(e) => handleChange(e)}
                  value={formData.designation}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="department"
                  name="department"
                  type="text"
                  placeholder="Department"
                  onChange={(e) => handleChange(e)}
                  value={formData.department}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="group"
                  name="group"
                  type="text"
                  placeholder="Group"
                  onChange={(e) => handleChange(e)}
                  value={formData.group}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="picture"
                  name="picture"
                  type="text"
                  placeholder="Picture URL"
                  onChange={(e) => handleChange(e)}
                  value={formData.picture}
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant={"ghost"} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" colorScheme="blue" onSubmit={(e) => handleSubmit(e)}>
              Add
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default EditContact;
