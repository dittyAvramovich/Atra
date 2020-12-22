const express = require('express');
const router = express.Router();
// const mongoose=require(mongoose);
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
// router.get('/allCategory',(req, res) => {

//     console.log("hi")
//     Category.find().then((result) => {
//         console.log(result)
//         res.status(200).json({
//             result
//         });
//     })

// })
// router.get('/allCategory',async(req, res) => {
// const r=await Category.find();
// console.log(r);
// })



router.get('/', function(req, res, next) {
    Category.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

// Get Single Card
router.get('/allCategoryy/:id', (req, res) => {
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

