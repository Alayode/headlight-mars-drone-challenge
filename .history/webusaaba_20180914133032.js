var express = require('express'),
    restful = require('node-restful'),
    mongoose =  restful.mongoose;

    var app = express();
    app.configure(function(){
        app.use(express.bodyParser());
        app.use(express.methodOverride());
    });


    mongoose.connect('mongodb://localhost/restful');

    app.listen(54321);
    console.log('Actvating Mining Drone #EXF4321.... at port 54321')
