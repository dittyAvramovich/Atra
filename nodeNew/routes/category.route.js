const express = require('express');
const router = express.Router();

// Card Model

const Category = require('../models/category');

// CREATE StartUp
router.route('/create-startup').post((req, res, next) => {
    console.log(req.body)
    Category.create(req.body, (error, data) => {
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
router.get('/allCategory', (req, res) => {

    console.log("hi")

 
    Category.find().then((result) => {
        console.log(result)
        res.status(200).json({
            result
        });
    })

})

// Get Single Card
router.get('/CategoryById/:id', (req, res) => {
    Category.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})



module.exports = router;
