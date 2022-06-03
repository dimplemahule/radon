const printDate = function(){
    let currantDate = new Date()
    console.log(currantDate)
}
const printmonth = function(){
    let currantDate = new Date()
    let currantmonth = currantDate.getMonth() + 1
    console.log('The currant month is' +currantmonth)
}

const batchInfo = function(){
    let batchinformation = 'Radon, W3D3, the topic for today is Nodejs module system'
    console.log(batchinformation);
}
module.exports.printDate = printDate
module.exports.printmonth = printmonth
module.exports.batchInfo = batchInfo
