let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
  

// StartUp Model
let startUpSchema = require('../models/StartUp');

// CREATE StartUp
router.route('/create-startup').post((req, res, next) => {
  console.log(req.body)
  startUpSchema.create(req.body, (error, data) => {
    debugger;
    if (error) {
      
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ StartUp
router.route('/').get((req, res) => {
  startUpSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single StartUp
router.route('/edit-startup/:id').get((req, res) => {
  startUpSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = router;

