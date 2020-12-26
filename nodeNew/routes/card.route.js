const express = require('express');
const router = express.Router();


// Card Model

const CardSchema = require('../models/card');

 
 

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


 
  router.get('/cardById/:id', function(req, res, next) {
    console.log("yes");
  CardSchema.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
    console.log(post);
  });
});
// Get Single Card
// router.get('/cardById/:id', (req, res) => {
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
module.exports = router;

