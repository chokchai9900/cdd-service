const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProfileModel = new Schema({
    _id: String,
    ChildName: String,
    ChildBirthday: Date,
    ChildGender: String,
    ChildProfileImg: String
}, {
  collection: 'ProfileChild'
})


module.exports = mongoose.model('ProfileChild', ProfileModel)