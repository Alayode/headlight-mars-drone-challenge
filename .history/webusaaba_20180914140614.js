var express = require('express'),
    restful = require('node-restful'),
    fs = require('fs'),
    ramda = require(''),
    users = [],
    mongoose =  restful.mongoose;

    var app = express();
    
    app.get('/',function(req,res) {
        res.send('Hello, World')
    })


    app.get('/yo',function(req,res) {
        res.send('YO!')
    })

app.get('/', function(req, res) {
    res.send('こんにちは、　世界！');
})

    // mongoose.connect('mongodb://localhost/restful');

    app.listen(54321);

    // string  parser is deprecated
    console.log('Actvating Mining Drone #EXF4321.... at port 54321');
