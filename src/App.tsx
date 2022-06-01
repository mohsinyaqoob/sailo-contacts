import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import Layout from "./layout";
import { useEffect, useState } from "react";
import { SearchBox } from "./components/SearchBox";
import { ContactsList } from "./components/ContactList";
import { ContactCard } from "./components/ContactCard";
import { AddIcon } from "@chakra-ui/icons";
import AddContact from "./components/AddContact";
import { getContacts } from "./utils";
import EditContact from "./components/EditContact";
import DeleteContact from "./components/DeleteContact";

const Index = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState();
  const [reload, setReload] = useState(false);

  const {
    isOpen: isOpenAddModal,
    onOpen: onOpenAddModal,
    onClose: onCloseAddModal,
  } = useDisclosure();

  const {
    isOpen: isOpenEditModal,
    onOpen: onOpenEditModal,
    onClose: onCloseEditModal,
  } = useDisclosure();

  const {
    isOpen: isOpenDeleteModal,
    onOpen: onOpenDeleteModal,
    onClose: onCloseDeleteModal,
  } = useDisclosure();

  const searchContacts = (query) => {
    const filter = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredContacts(filter);
  };

  const selectContact = (id) => {
    const selected = contacts.find((c) => c.id === id);
    setSelectedContact(selected);
  };

  const unselectContact = () => {
    setSelectedContact(null);
  };

  useEffect(() => {
    const contactsData = getContacts();
    setContacts(contactsData);
    setFilteredContacts(contactsData);
    contactsData.length > 0 && setSelectedContact(contactsData[0]);
  }, [reload]);

  const deleteContact = (id) => {};

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
      <AddContact
        reload={reload}
        setReload={setReload}
        isOpen={isOpenAddModal}
        onClose={onCloseAddModal}
      />

      <EditContact
        isOpen={isOpenEditModal}
        onClose={onCloseEditModal}
        setReload={setReload}
        reload={reload}
        contact={selectedContact}
      />

      <DeleteContact
        isOpen={isOpenDeleteModal}
        onClose={onCloseDeleteModal}
        setReload={setReload}
        reload={reload}
        contact={selectedContact}
      />

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
            <SearchBox
              unselectContact={unselectContact}
              searchContacts={searchContacts}
            />

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
              h={"60vh"}
              overflowY={"scroll"}
              css={ScrollBarStyles}
            />
          </VStack>
        </Box>
        {/* Main Content */}
        <Box w={"full"} h={"100vh"} pl={96}>
          {/* Contact Card */}
          {selectedContact && (
            <ContactCard
              contact={selectedContact}
              openEditModal={onOpenEditModal}
              openDeleteModal={onOpenDeleteModal}
            />
          )}
        </Box>
      </HStack>
    </Layout>
  );
};

export default Index;
