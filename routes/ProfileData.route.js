const express = require('express');
const app = express();
const profileDataRoute = express.Router();
let ProfileDataModel = require('../model/ProfileChild');


profileDataRoute.route('/').get((req, res) => {
  ProfileDataModel.find((error, profile) => {
    if (error) {
      return next(error)
    } else {
      res.json(profile)
      console.log('ProfileData retrieved!')
    }
  })
})


profileDataRoute.route('/create-profile').post((req, res, next) => {
  ProfileDataModel.create(req.body, (err, profile) => {
    if (err) {
      return next(err)
    } else {
      res.json(profile)
      console.log('ProfileData created!')
    }
  })
});


profileDataRoute.route('/getByID/:_id').get((req, res) => {
  ProfileDataModel.findById(req.params._id, (err, profile) => {
    if (err) {
      return next(err)
    } else {
      res.json(profile)
      console.log('ProfileData retrieved!')
    }
  })
})

profileDataRoute.route('/update-profile/:_id').put((req, res, next) => {
  ProfileDataModel.findByIdAndUpdate(req.params._id, {
    $set: req.body
  }, (err, profile) => {
    if (err) {
      return next(err);
    } else {
      res.json(profile)
      console.log('ProfileData updated!')
    }
  })
})

profileDataRoute.route('/delete-profile/:_id').delete((req, res, next) => {
  ProfileDataModel.findByIdAndRemove(req.params._id, (error, profile) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: profile
      })
      console.log('ProfileData deleted!')
    }
  })
})

module.exports = profileDataRoute;