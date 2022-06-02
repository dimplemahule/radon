const today = new Date()

const date = function printDate(){
    return today.getDate();
}

const month = function printMonth(){
    return today.getMonth();
}
const batchInfo = function getBatchInfo(){
    console.log("Roadon, W3D3, the topic for today is Nodejs module system");
}
module.exports.date = date
module.exports.month = month
module.exports.batchInfo = batchInfo
