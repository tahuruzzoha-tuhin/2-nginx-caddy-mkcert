'use strict'
var express = require("express");
var app = express();

app.use('/',function(req, res, next){
    res.end('Hello World from: ' + process.env.PORT )
});

module.exports = app
