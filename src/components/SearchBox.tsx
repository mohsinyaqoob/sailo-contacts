import { Box, Input, Text } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

export const SearchBox = (props) => {
  const { searchContacts } = props;
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
        {...props}
      />
    </Box>
  );
};
