const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema( {
    
    name: String,
    newAuthor_id: {
        type: ObjectId,
        ref: "newAuthor"
    },

    newPublisher_id:{
        type: ObjectId,
        ref: "newPublisher"
    },

    price: Number,
    
}, { timestamps: true });

module.exports = mongoose.model('newBook', newBookSchema) 
