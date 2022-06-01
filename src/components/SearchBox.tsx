import { Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

export const SearchBox = ({ searchContacts }) => {
  const onSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    const query = event.currentTarget.value;
    searchContacts(query);
  };

  return <Input onChange={onSearch} placeholder="Search..." size={"md"} />;
};
