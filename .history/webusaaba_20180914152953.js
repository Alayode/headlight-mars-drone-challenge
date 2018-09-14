const express = require('express')
const app = express()
const bodyParser = require('bodyParser')
const fs = require('fs')
const _ = require('lodash')
const users = []


app.use(bodyParser.json());


function SendPOSTRequest(path, data, callback) {

    const options = {
      hostname: 'localhost',
      port: 5000,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    let response = [];
  
    req = http.request(options, (res) => {
      res.on('data', (chunk) => { response.push(chunk); });
      res.on('end', () => { 
        let finalResponse = JSON.parse(response.join(''));
        callback(finalResponse); 
      });
    });
  
    req.write(JSON.Stringify(data));
    req.end();
  }


app.post("/register",(req,res) => {

})


app.get('/', function(req, res) {
    res.send('こんにちは、　世界！');
})

    // mongoose.connect('mongodb://localhost/restful');

    app.listen(54321);

    // string  parser is deprecated
    console.log('Actvating Mining Drone #EXF4321.... at port 54321');
