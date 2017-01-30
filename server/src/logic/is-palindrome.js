/**
 * Check wheter a string is a palindrome.
 */
module.exports = function(s) {
  // Falsy values are not palindromes
  if (!s) return false;

  // Remove non-word characters
  var r = s.replace(/\W/g, '');

  // Compare every word on uppercase
  r = r.toUpperCase();

  return r === reverse(r);
}

/**
 * Reverses a string.
 * WARNING! It does not work with UTF-16/multi-byte characters.
 */
function reverse(s){
  return s.split('').reverse().join('');
}
