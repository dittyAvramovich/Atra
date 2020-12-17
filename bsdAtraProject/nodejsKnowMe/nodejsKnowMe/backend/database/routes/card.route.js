let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
  

// Card Model
 
let cardSchema=require('../backend/database/models/Card');

// CREATE StartUp
router.route('/create-startup').post((req, res, next) => {
  console.log(req.body)
  cardSchema.create(req.body, (error, data) => {
    debugger;
    if (error) {
      
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Card
router.route('/').get((req, res) => {
  cardSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Card
router.route('/edit-startup/:id').get((req, res) => {
  cardSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = router;

