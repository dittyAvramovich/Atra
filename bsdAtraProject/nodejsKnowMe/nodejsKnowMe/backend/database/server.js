let express = require('express');
let mongoose = require('mongoose');
var multer = require('multer')
var cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./db');

// Express Route
const cardRoute = require('../../routes/card.route')
 
const morgan = require('morgan');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})
var upload = multer({ storage: storage }).single('file')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(morgan("dev"));


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})


app.use((req,res,next)=>{
  res.header("Accsess-Control-Allow-Origin","*");
  res.header("Accsess-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept, Authoriztion");
  if(req.method==='OPTIONS'){

      res.header("Accsess-Control-Allow-Methods","PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
  }
  next();

})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// app.use(cors());

app.use('/cards', cardRoute)
 
// app.use('/members',MembersRoute)
// app.use('/image',ImageRoute)


// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.post('/upload',function(req, res) {
     
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)

  })

});
