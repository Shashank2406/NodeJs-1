var mongoose = require('mongoose');

var PharSchema = new mongoose.Schema({                          //Pharmacist Schema
    name: {type: String},
    designation: {type: String},
    user_id: {type:String},
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});



module.exports = mongoose.model('Phar',PharSchema);