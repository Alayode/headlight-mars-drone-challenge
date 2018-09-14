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

    const app = express();

    fs.readFile('users.json', {encoding: 'utf8'}, function (err, data) {
        if (err) throw err
      
        JSON.parse(data).forEach(function (user) {
          user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
          users.push(user)
        })
      
      })
      
      app.get('/', function (req, res) {
        var buffer = ''
      
        users.forEach(function (user) {
          buffer += '<a href="/' + user.username + '">' + user.name.full + '</a><br>'
        })
        res.send(buffer)
      })
      
      app.get(/big.*/, function (req, res, next) {
        console.log('BIG USER ACCESS')
        next()
      })
      
      app.get(/.*dog.*/, function (req, res, next) {
        console.log('DOGS GO WOOF')
        next()
      })
      
      app.get('/:username', function (req, res) {
        var username = req.params.username
        res.send(username)
      })
      
app.get('/', function(req, res) {
    res.send('こんにちは、　世界！');
})

    // mongoose.connect('mongodb://localhost/restful');

    app.listen(54321);

    // string  parser is deprecated
    console.log('Actvating Mining Drone #EXF4321.... at port 54321');
