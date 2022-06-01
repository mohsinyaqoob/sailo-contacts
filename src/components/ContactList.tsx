import { Box, List, ListItem, Text } from "@chakra-ui/react";

export const ContactsList = (props) => {
  const { contacts, selectContact } = props;

  const groupNames = (arr) => {
    const map = arr.reduce((acc, val) => {
      let char = val.name.charAt(0).toUpperCase();

      acc[char] = [].concat(acc[char] || [], val);
      
      return acc;
    }, {});
    const res = Object.keys(map).map((el) => ({
      letter: el,
      names: map[el],
    }));
    return res;
  };

  return (
    <List {...props}>
      {groupNames(contacts).map((letter, index) => (
        <Box key={index}>
          <Text>{letter.letter}</Text>
          {letter.names.map((contact) => {
            return (
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
            );
          })}
        </Box>
      ))}
    </List>
  );
};
