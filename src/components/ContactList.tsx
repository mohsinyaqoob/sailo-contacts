import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, List, ListItem, Text } from "@chakra-ui/react";

export const ContactsList = (props) => {
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

  const { contacts, selectContact } = props;

  return (
    <Box {...props}>
      <List css={ScrollBarStyles} overflow={"scroll"} h={"100vh"}>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ListItem
              key={contact.id}
              onClick={() => selectContact(contact.id)}
              borderBottom={"2px"}
              p={2}
              my={4}
              borderColor={"lightGray"}
            >
              <Text _hover={{ cursor: "pointer", color: "darkGray" }}>
                {contact.name}
              </Text>
            </ListItem>
          ))
        ) : (
          <Text mt={4} pl={2}>
            No results...
          </Text>
        )}
      </List>
    </Box>
  );
};
