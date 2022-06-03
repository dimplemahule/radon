const express = require('express');
const logger = require('../logger/logger')
const util = require('../util/helper')
const externalmodule =require('../validator/formatter')
const underscore = require('underscore')
const _ = require('lodash')



const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.Welcome()
    util.batchInfo()
    util.printDate()
    util.printmonth
    externalmodule.upper()
    externalmodule.trime()
    
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {

    // ==========chunk function==========

    let y = ['jan','feb','march','april','may','jun','july','aug','sep','oct','nov','dec'];
    console.log(_.chunk(y, 4))

  //==================tail function=========  
   

let x = [1, 3, 5, 7, 9,]

let newArray = _.tail(x, 9);

console.log(newArray);

//==========================function union ===================

let xyz = [1, 2, 3, 4, 5]
let abc = [10, [20, 30], 5] 

console.log(_.union(xyz, abc))
console.log(_.mergeWith(xyz, abc))

//=====================function fromPairs===================


let pairs = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]

let obj = _.fromPairs(pairs);

console.log(obj)

    
    res.send('My fourth assignment!')
});



router.get('/sol1', function (req, res) {
    
    let arr= [1,2,3,5,6,7]
 
   let total = 0;
   for (var i in arr) {
       total += arr[i];
   }
 
   let lastDigit= arr.pop()
   let consecutiveSum= lastDigit * (lastDigit+1) / 2 //1*1+1/2
   let missingNumber= consecutiveSum - total

    res.send({ data: missingNumber  } )
});


router.get('/sol2', function (req, res) {
    
    let arr= [33, 34, 35, 37, 38,]
   let len= arr.length
 
   let total = 0;
   for (var i in arr) {
       total += arr[i];
   }
 
   let firstDigit= arr[0]
   let lastDigit= arr.pop()
   let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
   let missingNumber= consecutiveSum - total

    res.send({ data: missingNumber  } )
});

// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// });

router.post('/Players1', function (req, res) {
    
    let player = [
        {
            
                "name":"sania mirza",
                "DOB":"1/6/1990",
                "gender":"female",
                "city":"mumbai",
                "sports": [
                    "badminton"
                ],
            },
            {
                "name":"Ranjeet",
                "DOB":"14/10/1993",
                "gender":"male",
                "city":"nagpur",
                "sports": [
                    "cricket"
                ],
            },
            {
                "name":"Monika",
                "DOB":"1/03/2000",
                "gender":"female",
                "city":"Gondia",
                "sports": [
                    "Running"
                ],
            },
        
    ]
    let abc = req.body.data
    player.push(abc)
    res.send({data1:player, status:true})
});
module.exports = router;
// adding this comment for no reason