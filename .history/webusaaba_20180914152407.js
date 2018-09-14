var express = require('express')
var app = express()

var fs = require('fs')
var _ = require('lodash')
var users = []


fs.readFile('users.json', {encoding: 'utf8'}, function(err, data) {
    if (err) throw err

    JSON.parse(data).forEach(function (user) {
        user.name.full = (user.name.first + '' + user.name.last)
        users.push(user);
    })
})




app.get('/', function(req, res) {
    res.send('こんにちは、　世界！');
})

    // mongoose.connect('mongodb://localhost/restful');

    app.listen(54321);

    // string  parser is deprecated
    console.log('Actvating Mining Drone #EXF4321.... at port 54321');
