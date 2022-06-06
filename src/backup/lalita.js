const express = require('express');
const logger = require('../logger/logger')
const util = require('../util/helper')
const externalmodule =require('../validator/formatter')
const underscore = require('underscore')
const _ = require('lodash')



const router = express.Router();

router.get('/test-me', function (req, res) {
   
        res.send('MongoDB is a database')
    
});

module.exports = router;