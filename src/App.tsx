import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  Button,
  Modal,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

import Layout from "./layout";
import { Contacts } from "./data/contacts";
import { useState } from "react";
import { SearchBox } from "./components/SearchBox";
import { ContactsList } from "./components/ContactList";
import { ContactCard } from "./components/ContactCard";
import { AddIcon } from "@chakra-ui/icons";
import AddContact from "./components/AddContact";
import DeleteContact from "./components/DeleteContact";
import { Contact } from "./types/contact";

const Index = () => {
  const [filteredContacts, setFilteredContacts] = useState(Contacts || {});
  const [selectedContact, setSelectedContact] = useState(Contacts[0]);
  const {
    isOpen: isOpenAddModal,
    onOpen: onOpenAddModal,
    onClose: onCloseAddModal,
  } = useDisclosure();
  const {
    isOpen: isOpenDeleteModal,
    onOpen: onOpenDeleteModal,
    onClose: onCloseDeleteModal,
  } = useDisclosure();

 const deleteItem = () => {
    onOpenDeleteModal()
 }
  

  const searchContacts = (query) => {
    const filter = Contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredContacts(filter);
  };

  const selectContact = (id) => {
    const selected = Contacts.find((c) => c.id === id);
    setSelectedContact(selected);
  };

  const deleleContact = (id) => {
     Contacts.splice(id, 1);
  }
  const ScrollBarStyles = {
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      width: "16px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "lightGray",
      borderRadius: "24px",
    },
  };
  return (
    <Layout>
      <AddContact isOpen={isOpenAddModal} onClose={onCloseAddModal} />
      <DeleteContact isOpen={isOpenDeleteModal} onClose={onCloseDeleteModal} deleteContact={() =>deleleContact(selectedContact.id)} />
      {/* Left Sider */}
      <HStack>
        <Box
          p={8}
          w={96}
          position={"fixed"}
          h={"100vh"}
          boxShadow={"md"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"space-between"}
        >
          <VStack align={"left"} spacing={8}>
            <Box mb={8} display={"flex"} alignItems={"center"} gap={4}>
              {/* <PhoneIcon /> */}
              <Heading
                size={"md"}
                textTransform={"uppercase"}
                letterSpacing={-1}
              >
                sailo contact
              </Heading>
            </Box>
            {/* Search Box */}
            <SearchBox searchContacts={searchContacts} />

            {/* Contact List */}
            <HStack justifyContent={"space-between"} px={1}>
              <Text fontWeight={600}>Your Contacts</Text>
              <Button
                onClick={onOpenAddModal}
                leftIcon={<AddIcon />}
                size={"sm"}
              >
                Add
              </Button>
            </HStack>
            <ContactsList
              contacts={filteredContacts}
              selectContact={selectContact}
              h={"100vh"}
              overflowY={"scroll"}
              css={ScrollBarStyles}
            />
          </VStack>
        </Box>
        {/* Main Content */}
        <Box w={"full"} h={"100vh"} pl={96}>
          {/* Contact Card */}
          {/* Use disclosuse for delete */}
          {selectedContact ? <ContactCard contact={selectedContact}  deleteItem = {deleteItem}/> : null}
        </Box>
      </HStack>
    </Layout>
  );
};

export default Index;