const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DataModel = new Schema({
    _id: String,
    RateTitle: String,
    RateType: String,
    RateData: [{
        Equipment: String,
        HowToRate: String,
        Rule: String
    }],
    RateValidate: String,
    RateAssets: [{url:String}],
    ResultAfterRate: [{
        ResultPass: String,
        ResultNotPass: String,
        ReplaceEquipment: String,
        Objective: String
    }]
}, {
  collection: 'RateData'
})


module.exports = mongoose.model('RateData', DataModel)