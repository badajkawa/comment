var express = require('express');
var router = express.Router();

const nsq = require('nsqjs')
const config = require('../../files/config/main.config')


const reader = new nsq.Reader('instantloan__apply_loan', 'instantloan__apply',config.nsq)

reader.connect()

reader.on('message', msg => {
  console.log('Received message [%s]: %s', msg.id, msg.body.toString())
  //console.log('Received message')
  msg.finish()
})








/* GET home page. */
router.get('/', function(req, res, next) {


  res.render('index', { title: 'Express' });
});





module.exports = router;
