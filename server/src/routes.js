var express = require('express');
var router = express.Router();

var isPalindrome = require('./logic/is-palindrome');

router.get('/palindrome', function(req, res) {
    if (isPalindrome(req.query.s)) {
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;
