const express = require('express');
const logger = require('../logger/logger')
const util = require('../util/helper')
const externalmodule =require('../validator/formatter')
const underscore = require('underscore')



const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.Welcome()
    console.log("today date(dd/mm)-"+util.date()+ "/" +util.month())
    console.log("Roadon, W3D1, the topic for today is Nodejs module system")
    externalmodule.upper()
    externalmodule.trime()
    
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason