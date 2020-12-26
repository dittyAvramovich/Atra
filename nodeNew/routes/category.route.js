const express = require('express');
const router = express.Router();
 

const Category = require('../models/category');

router.get('/allCategory',(req, res) => {

    console.log("hi")
    Category.find().then((result) => {
        console.log(result)
        res.status(200).json({
            result
        });
    })

})

router.get('/CategoryById/:id', (req, res) => {
    Category.findById(req.params.id, (error, data) => {
        console.log(data)
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})



module.exports = router;

