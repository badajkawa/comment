var express = require('express');
var router = express.Router();

var commentController = require('../controllers/commentController');

/* GET users listing. */
router.get('/fetch',commentController.fetch);

module.exports = router;
