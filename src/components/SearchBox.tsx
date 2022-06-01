import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

export const SearchBox = (props) => {
  const { searchContacts, unselectContact } = props;
  const onSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    const query = event.currentTarget.value;
    searchContacts(query);
  };

  return (
    <Box>
      <InputGroup>
        <Input
          onChange={onSearch}
          placeholder="Search..."
          size={"md"}
          {...props}
        />
        <InputRightElement>
          <DeleteIcon onClick={unselectContact} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
