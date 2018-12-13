const nsq = require('nsqjs')

const reader = new nsq.Reader('instantloan__apply_loan', 'instantloan__apply', {
    nsqdTCPAddresses: '127.0.0.1:4150'
})


reader.connect()



reader.on('message', msg => {
    //console.log('Received message [%s]: %s', msg.id, msg.body.toString())
    console.log('Received message')
    msg.finish()
})





