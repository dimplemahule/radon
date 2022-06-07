const mongoose = require('mongoose');

const bookModel = new mongoose.Schema( {
    bookName:{
       type: String,
       required:true
    } , 
    authorName: String,
    prices:{
        indianPrice:String,
        eroPrice:String,
     },
     year:{
         type:String,
         default: 2021
     },
     
    tags: [String],

    
    totalPages:Number,

    stockAvailable: Boolean

    
    
    },{ timestamps: true });


module.exports = mongoose.model('Books', bookModel) 