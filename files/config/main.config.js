

var DEVELOPMENT = {

    nsq:{
        nsqdTCPAddresses:'127.0.0.1:4150',
    }

}



var theConfig = DEVELOPMENT;
exports.nsq = theConfig.nsq;
