const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {

    amount: Number,
	isFreeAppUser: Boolean, 
	date:String,

    useModel_id: {
        type: ObjectId,
        ref: "Use"
    },
    product_id: {
        type: ObjectId,
        ref: "Product"
    },

    
    
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
