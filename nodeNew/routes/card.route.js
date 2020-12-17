const express = require('express');
const router = express.Router();

// Card Model

const Card = require('../models/card');

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
router.get('/allCard', (req, res) => {

    console.log("hi")
 
    Card.find().then((result) => {
        console.log(result)
        res.status(200).json({
            result
        });
    })

})

// Get Single Card
router.get('/edit-startup/:id', (req, res) => {
    cardSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})



module.exports = router;

