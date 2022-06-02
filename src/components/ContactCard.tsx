import {
  VStack,
  HStack,
  Box,
  Heading,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  ButtonGroup,
  Button,
  Text,
  Badge,
  Image,
  Link,
} from "@chakra-ui/react";
import { EditIcon, EmailIcon, DeleteIcon } from "@chakra-ui/icons";
import { getShortName } from "../utils/index";

export const ContactCard = (props) => {
  const {
    contact: {
      id,
      name,
      email,
      designation,
      department,
      phone,
      group,
      picture,
    },
    openEditModal,
    openDeleteModal,
  } = props;
  return (
    <VStack p={8} align={"left"}>
      <HStack gap={8}>
        <Box
          className="profile-picture"
          bg={"lightGray"}
          h={32}
          w={32}
          rounded={"full"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading
            color={"darkGray"}
            letterSpacing={2}
            size={"2xl"}
            fontWeight={"400"}
          >
            {picture ? (
              <Image rounded={"full"} src={picture} />
            ) : (
              getShortName(name)
            )}
          </Heading>
        </Box>
        <VStack align={"left"} spacing={0}>
          <Heading size={"xl"}>{name}</Heading>
          <Text pb={2}>{designation}</Text>
          <Badge fontSize={12} colorScheme="green">
            EMP-{id}
          </Badge>
        </VStack>
      </HStack>
      <HStack flex={1} gap={8} pt={8}>
        <Box w={32}></Box>
        <VStack align={"left"} spacing={6}>
          <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td pl={0} pr={16}>
                    Name
                  </Td>
                  <Td pl={0} pr={16}>
                    {name + ""}
                  </Td>
                </Tr>
                <Tr>
                  <Td pl={0} pr={16}>
                    Designation
                  </Td>
                  <Td pl={0} pr={16}>
                    {designation}
                  </Td>
                </Tr>
                <Tr>
                  <Td pl={0} pr={16}>
                    Email
                  </Td>
                  <Td pl={0} pr={16}>
                    {email}
                  </Td>
                </Tr>
                <Tr>
                  <Td pl={0} pr={16}>
                    Phone
                  </Td>
                  <Td pl={0} pr={16}>
                    {phone}
                  </Td>
                </Tr>
                <Tr>
                  <Td pl={0} pr={16}>
                    Department
                  </Td>
                  <Td pl={0} pr={16}>
                    {department}
                  </Td>
                </Tr>
                <Tr>
                  <Td pl={0} pr={16}>
                    Group
                  </Td>
                  <Td pl={0} pr={16}>
                    {group}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <HStack pt={8} justifyContent={"space-between"}>
            <ButtonGroup>
              <Link
                href={`mailto:?subject=Sharing - Sailo Contact&body=Hi. Here are the contact details: %0D%0DName: ${name},%0DEmail: ${email},%0DPhone: ${phone},%0DDesignation: ${designation},%0DDepartment: ${department},%0DGroup: ${group},%0D%0D%0DThanks and Regards
                `}
              >
                <Button variant={"outline"} leftIcon={<EmailIcon />}>
                  Share Contact
                </Button>
              </Link>
              <Button onClick={openEditModal} leftIcon={<EditIcon />}>
                Edit
              </Button>
              <Button
                onClick={openDeleteModal}
                variant={"solid"}
                leftIcon={<DeleteIcon />}
                colorScheme={"red"}
              >
                Delete
              </Button>
            </ButtonGroup>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};
