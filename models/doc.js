var mongoose = require('mongoose');


var DocSchema = new mongoose.Schema({                           //Doctor Schema
    name: {type: String},
    designation: {type: String},
    user_id: {type:String},
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});



module.exports = mongoose.model('Doctor',DocSchema);