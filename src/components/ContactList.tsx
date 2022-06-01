import { List, ListItem, Text } from "@chakra-ui/react";

export const ContactsList = (props) => {
  const { contacts, selectContact } = props;
  console.log(selectContact);

  return (
    <List {...props}>
      {contacts.map((contact, index) => (
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
      ))}
    </List>
  );
};
