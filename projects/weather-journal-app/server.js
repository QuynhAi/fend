/* Empty JS object to act as endpoint for all routes */
projectData = {};
// TODO-Express to run app and routes
const express = require('express');
// TODO-Start up an instance of app
const app = express(); // object of the express module
/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// TODO-Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
/* Initializing the main project folder */
app.use(express.static('website'));
const port = 8080;

//Create a local app with Node and Express:
app.listen(port,listening);

function listening(){
    console.log("app running");
    console.log('running on localhost ' + port);
}

let data = [];
app.get('/all', function(req,res){
    res.send({projectData});
});

app.post('/weather', function(req, res){ 
    let newEntry={
        temp: req.body.temp,
        content: req.body.contenta,
    }
    data.push(newEntry);
    res.send(data);
    console.log("received:" + data);
});

