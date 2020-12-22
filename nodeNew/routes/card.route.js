const express = require('express');
const router = express.Router();


// Card Model

const CardSchema = require('../models/card');

// CREATE StartUp
router.route('/create-startup').post((req, res, next) => {
    console.log(req.body)
    CardSchema.create(req.body, (error, data) => {
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
 
    CardSchema.find().then((result) => {
        console.log(result)
        res.status(200).json({
            result
        });
    })

})

// Get Single Card
// router.get('/card/cardById/:id', (req, res) => {
//     debugger;
//     console.log("yes")
//     CardSchema.findById(req.params.id, (error, data) => {
//         console.log("id!!");
//         console.log(data);
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     })
// })

router.get('/card/cardById/:id', function(req, res, next) {
    console.log("yes");
  CardSchema.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
    console.log(post);
  });
});

module.exports = router;

