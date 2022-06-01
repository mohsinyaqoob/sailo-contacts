export const getShortName = (name: string) => {
  const nameArray = name.split(" ");
  return nameArray.map((n) => n.charAt(0));
};

export const SaveContact = (contact) => {
  const localStorageData = localStorage.getItem("contacts");

  if (localStorageData) {
    const existingContacts = JSON.parse(localStorageData);
    const newContacts = JSON.stringify([...existingContacts, contact]);
    localStorage.setItem("contacts", newContacts);
  } else {
    localStorage.setItem("contacts", JSON.stringify([contact]));
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
