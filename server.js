var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://mydbreader:d1fficultp%40ssw0rd@mongodb0.example.com:27017/?authSource=admin', function(err, db) {
    if (err) throw err
})
var apiRouter = require('./routes/Api');
var authRouter = require('./routes/Auth');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);
app.use('/auth', authRouter);


app.use(function(req, res, next) {
    next(createError(404));
});


app.use(function(err, req, res, next) {

    res.status(err.status || 500);
    res.send({ status: 'error' });

});

var port = process.env.PORT || 8000;
app.listen(port, () => console.log("server is running on port ", port))