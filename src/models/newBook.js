const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newbookSchema = new mongoose.Schema( {
    name: String,
    newauthor_id: {
        type: ObjectId,
        ref: "newAuthor"
    },
    newpublisher_id: {
        type: ObjectId,
        ref: "newPublisher"
    },
    price: Number,
    rating: Number,
    isHardcover:{
        type:Boolean,
        default:false

    }
  
  


}, { timestamps: true });


module.exports = mongoose.model('NewBooks', newbookSchema)