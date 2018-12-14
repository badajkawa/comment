
var flow = require('flow-maintained');

module.exports.fetch = function(req,res) {

    console.log(req)
    var rreturn = {statusCode:200,message:'success',latency:0}
    res.json(rreturn).end()


}

module.exports.most_comment = function(req,res) {

    var rreturn = {statusCode:200,message:'success',latency:0};
    res.json(rreturn).end()


}
