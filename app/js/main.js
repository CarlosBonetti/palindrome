angular.module('palindromeApp', [])
  .service('PalindromeService', function($http) {
    return {
      isPalindrome: function(s) {
        return $http({
          method: 'GET',
          url: '/api/palindrome?s=' + s,
        });
      }
    };
  })
  .controller('PalindromeController', function($scope, PalindromeService) {
    // Save whether the previous requisition was a palindrome
    $scope.isPalindrome = undefined;

    // Save the previous submitted string
    $scope.previous = '';

    $scope.submit = function() {
      var s = $scope.s;
      $scope.previous = s;

       PalindromeService.isPalindrome(s).then(function(res) {
         $scope.isPalindrome = true;
       }, function(err) {
         $scope.isPalindrome = false;
       });
    };
  });
