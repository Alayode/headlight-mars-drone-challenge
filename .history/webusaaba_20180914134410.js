var express = require('express'),
    restful = require('node-restful'),
    mongoose =  restful.mongoose;

    var app = express();
    
    app.get('/',function(req,res) {
        res.send('Hello, World')
    })

    // mongoose.connect('mongodb://localhost/restful');

    app.listen(54321);

    // string  parser is deprecated
    console.log('Actvating Mining Drone #EXF4321.... at port 54321');
