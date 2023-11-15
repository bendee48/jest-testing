function capitalize(str) {
  if (str === undefined) return undefined;
  if (str.length === 0) return str;

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export default capitalize;