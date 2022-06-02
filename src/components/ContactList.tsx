import { Box, List, ListItem, Text } from "@chakra-ui/react";

const groupNames = (arr) => {
  const map = arr.reduce((acc, val) => {
    let char = val?.name?.charAt(0).toUpperCase() ;
    acc[char] = [].concat(acc[char] || [], val);
    return acc;
  }, {});
  let res = Object.keys(map).map((el) => ({
    letter: el,
    names: map[el],
  }));
  res = res.sort((a, b) => a.letter.localeCompare(b.letter));
  return res;
};

export const ContactsList = (props) => {
  const { contacts, selectContact } = props;

  return (
    <Box {...props}>
      <List>
        {groupNames(contacts) && groupNames(contacts).map((group, index) => (
          <Box key={index}>
            <Text fontWeight={"900"}>{group.letter}</Text>
            {group.names.map((contact) => {
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
        )) }
      </List>
    </Box>
  );
};
