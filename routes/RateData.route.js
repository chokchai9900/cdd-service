const express = require('express');
const app = express();
const rateDataRoute = express.Router();
let RateDataModel = require('../model/RateData');


rateDataRoute.route('/').get((req, res) => {
  RateDataModel.find((error, ratedata) => {
    if (error) {
      return next(error)
    } else {
      res.json(ratedata)
      console.log('RateData retrieved!')
    }
  })
})


rateDataRoute.route('/create-user').post((req, res, next) => {
  RateDataModel.create(req.body, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('RateData created!')
    }
  })
});


rateDataRoute.route('/getByID/:_id').get((req, res) => {
  RateDataModel.findById(req.params._id, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('RateData retrieved!')
    }
  })
})

rateDataRoute.route('/getByAgeValidate/:RateValidate').get((req, res) => {
  var condition = {
    "RateValidate": req.params.RateValidate
  };
  RateDataModel.find(condition, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log(req.params.RateValidate)
      console.log('RateData retrieved!')
    }
  })
})



rateDataRoute.route('/update-user/:_id').put((req, res, next) => {
  RateDataModel.findByIdAndUpdate(req.params._id, {
    $set: req.body
  }, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.json(user)
      console.log('RateData updated!')
    }
  })
})

rateDataRoute.route('/delete-user/:_id').delete((req, res, next) => {
  RateDataModel.findByIdAndRemove(req.params._id, (error, user) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: user
      })
      console.log('RateData deleted!')
    }
  })
})

module.exports = rateDataRoute;