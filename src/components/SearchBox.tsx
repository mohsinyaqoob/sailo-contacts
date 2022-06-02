import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

export const SearchBox = (props) => {
  const { searchContacts, unselectContact, ...rest } = props;
  const onSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    const query = event.currentTarget.value;
    searchContacts(query);
  };

  return (
    <Box>
      <Input
        onChange={onSearch}
        placeholder="Search..."
        size={"md"}
        {...rest}
      />
    </Box>
  );
};
