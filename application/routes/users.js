var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.get('/hello', function(req, res, next) {
  res.send('hello');
});


router.get('/hai', function(req, res, next) {
  res.send('hai');
});


router.get('/huu', function(req, res, next) {
  res.send('huu');
});

module.exports = router;
