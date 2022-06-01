export const getShortName = (name) => {
  const nameArray = name.split(" ");
  return nameArray.map((n) => n.charAt(0));
};
