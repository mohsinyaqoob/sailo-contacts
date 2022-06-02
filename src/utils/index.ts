import { Contact } from "../types/contact";
import { v4 as uuidv4 } from "uuid";

export const getShortName = (name: string) => {
  const nameArray = name.split(" ");
  return nameArray.map((n) => n.charAt(0));
};

export const saveContact = (contact) => {
  const contacts = getContacts();

  if (contacts.length > 0) {
    const newContacts = JSON.stringify([
      ...contacts,
      { id: uuidv4(), ...contact },
    ]);
    localStorage.setItem("contacts", newContacts);
  } else {
    // Add demo data on load
    const newContact = JSON.stringify([{ id: uuidv4(), ...contact }]);
    localStorage.setItem("contacts", newContact);
  }
};

export const getContacts = () => {
  const localStorageData = localStorage.getItem("contacts");
  if (localStorageData) {
    const contacts = JSON.parse(localStorageData);
    return contacts;
  }

  return [];
};

export const deleteContact = (id: number) => {
  const localStorageData = localStorage.getItem("contacts");
  const contacts = JSON.parse(localStorageData);
  const newContacts = contacts.filter((contact) => contact.id !== id);
  localStorage.setItem("contacts", JSON.stringify(newContacts));
};

export const updateContact = (contact) => {
  const id = contact.id;
  let contacts = getContacts();
  let contactToUpdate = contacts.find((contact) => contact.id === id);
  const index = contacts.map((i) => i.id).indexOf(id);
  contactToUpdate = { ...contact };
  contacts[index] = contactToUpdate;

  localStorage.setItem("contacts", JSON.stringify(contacts));
};
