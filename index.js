// Remove Spaces from a string
export const removeSpaces = (string) => {
  if (string) {
    let explodedString = string.split(' ');
    explodedString = explodedString.reduce((a, b) => a + b);
    return explodedString;
  }
  return null;
};