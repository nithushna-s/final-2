const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String
},
password: {
    required: true,
    type:  String
},
email: {
  required: true,
  type: String
},
});

const userModel = mongoose.model('userModels', userSchema);

module.exports = userModel;