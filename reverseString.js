function reverseString(str) {
  if (!str) throw new Error("You must provide a string.");
  
  return [...str].reverse().join('');
}

export default reverseString;