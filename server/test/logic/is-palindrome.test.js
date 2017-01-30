var assert = require('assert');
var isPalindrome = require('../../src/logic/is-palindrome');

describe('is-palindrome', function() {
  it('should return whether a string is a palindrome or not', function() {
    assert.ok(isPalindrome('ABBA'));
    assert.ok(isPalindrome('RACECAR'));

    assert.ok(!isPalindrome(undefined));
    assert.ok(!isPalindrome(''));
    assert.ok(!isPalindrome('MACACO'));
  });

  it('should not consider spaces', function() {
    assert.ok(isPalindrome('A MAN A PLAN A CANAL PANAMA'));
  });

  it('should make no difference for lowercase/uppercase', function() {
    assert.ok(isPalindrome('a Man a PLaN A canal PaNaMa'));
  });

  it('should make no difference for punctuation', function() {
    assert.ok(isPalindrome('A MAN, A PLAN, A CANAL PANAMA?'));
  });

  it('should make no difference for word dividers', function() {
    assert.ok(isPalindrome('A MAN A PLAN-A-CANAL PANAMA'));
  });
});
