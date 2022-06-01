import { Box, Heading, HStack } from "@chakra-ui/react";

import Layout from "./layout";
import { Contacts } from "./data/contacts";
import { useState } from "react";
import { SearchBox } from "./components/SearchBox";
import { ContactsList } from "./components/ContactList";
import { ContactCard } from "./components/ContactCard";

const ScrollBarStyles = {
  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-track": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "lightGray",
    borderRadius: "24px",
  },
};

const Index = () => {
  const [filteredContacts, setFilteredContacts]: any = useState(Contacts);
  const [selectedContact, setSelectedContact]: any = useState(Contacts[0]);

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

  return (
    <Layout>
      {/* Left Sider */}
      <HStack>
        <Box
          p={8}
          w={96}
          position={"fixed"}
          h={"full"}
          boxShadow={"md"}
          overflowY={"scroll"}
          overflowX={"hidden"}
          css={ScrollBarStyles}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"space-between"}
        >
          <Box mb={16} display={"flex"} alignItems={"center"} gap={4}>
            {/* <PhoneIcon /> */}
            <Heading size={"md"} textTransform={"uppercase"} letterSpacing={-1}>
              sailo contact
            </Heading>
          </Box>
          {/* Search Box */}
          <SearchBox searchContacts={searchContacts} />

          {/* Contact List */}
          <ContactsList
            flex={1}
            contacts={filteredContacts}
            selectContact={selectContact}
          />
        </Box>
        {/* Main Content */}
        <Box w={"full"} h={"100vh"} pl={96}>
          {/* Contact Card */}
          <ContactCard contact={selectedContact} />
        </Box>
      </HStack>
    </Layout>
  );
};

export default Index;
