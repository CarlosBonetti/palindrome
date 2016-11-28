var express = require('express');
var router = module.exports = express.Router();
var isPalindrome = require('is-palindrome');

router.get('/palindrome', function(req, res) {
    if (isPalindrome(req.query.s)) {
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});
