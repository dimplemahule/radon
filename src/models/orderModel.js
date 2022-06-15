const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {

    amount: Number,
	isFreeAppUser: Boolean, 
	date:String,

    useModel_id:String,
    
    product_id:String
  
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
