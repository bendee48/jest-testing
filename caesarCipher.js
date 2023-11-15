/**  
 * Encrypts a string by returning a new string with each character shifted by the provided offset
 * eg. caesarCipher('a', 1) => 'b'
 * @param {string} str - The string to be encrypted
 * @param {number} offset - The number to shift each character by
 */ 
function caesarCipher(str, offset) {
  return Array.prototype.reduce.call(str, (newStr, char) => {
    let code = char.charCodeAt();

    // check for lower case chars
    if (code >= 97 && code <= 122) {
      char = String.fromCharCode(((code - 97 + offset) % 26) + 97);
    }

    // check for uppercase chars
    if (code >= 65 && code <= 90) {
      char = String.fromCharCode(((code - 65 + offset) % 26) + 65);
    }

    return newStr + char;
  }, "");
}

export default caesarCipher;