const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cardRoute =require('./routes/card.route');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));


mongoose.connect(`mongodb+srv://rivka:314792rb@cluster0.iutps.mongodb.net/knowmedb?retryWrites=true&w=majority`, {
    useNewUrlParser: true,  
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("connect!")
})


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
        return res.status(200).json({})
    }
    next();
});

// app.use(express.json());
app.use(bodyParser.json())


app.use('/card',cardRoute);
// app.use('/category',categoryRoute);


app.get('/', (req, res) => {
    console.log("come")
    res.status(200).json({
        message: "hellow"
    })
});

app.use((req, res, next) => {
    const error = new Error("not found");
    error.status = 404;

    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;