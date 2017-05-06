// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var UserSchema = new mongoose.Schema({
    username: {type: String},
    name: {type: String},
    email: {type: String},
    phone_number: {type: Number},
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});

var DocSchema = new mongoose.Schema({                           //Doctor Schema
    name: {type: String},
    designation: {type: String},
    user_id: {type:String},
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});

var PharSchema = new mongoose.Schema({                          //Pharmacist Schema
    name: {type: String},
    designation: {type: String},
    user_id: {type:String},
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});




// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Doctor',DocSchema);
module.exports = mongoose.model('Phar',PharSchema);