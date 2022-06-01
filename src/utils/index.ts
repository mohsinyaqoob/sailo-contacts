export const getShortName = (name) => {
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
