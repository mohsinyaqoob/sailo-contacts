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

export const updateContact = (contact) => {
  const id = contact.id;
  let contacts = getContacts();
  let contactToUpdate = contacts.find((contact) => contact.id === id);
  const index = contacts.map((i) => i.id).indexOf(id);
  contactToUpdate = { ...contact };
  contacts[index] = contactToUpdate;

  localStorage.setItem("contacts", JSON.stringify(contacts));
};
