export const recuired = (value) => {
  if (value) return undefined;

  return "Filed is required";
};

export const maxLengthCreatre = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length ${maxLength} symbols`;
  return undefined;
};
