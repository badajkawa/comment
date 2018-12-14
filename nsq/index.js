const nsq = require('nsqjs')
const config = require('../files/config/main.config')


const reader = new nsq.Reader('instantloan__apply_loan', 'instantloan__apply',config.nsq)


reader.connect()



reader.on('message', msg => {
    //console.log('Received message [%s]: %s', msg.id, msg.body.toString())
    console.log('Received message')
    msg.finish()
})





