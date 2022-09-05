// Setup empty JS object to act as endpoint for all routes
projectData = {};

  


// Express to run server and routes
const express = require("express");
const app = express();

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

//body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 4000;

const testServer = () => {
console.log(`Server is running at port number : http://localhost:${port}`);
};

app.listen(port , testServer);



// Callback function to complete add 
 function addAllFunctions(req,res){ 
                                         projectData['date'] = req.body.newData;
                                         projectData['temp']= req.body.temp;
                                         projectData['feelings']= req.body.feelings;
                                         console.log(projectData);
                                         res.send(projectData);
                                         res.end(); 
                                       };
app.post('/add', addAllFunctions);


// Callback function to complete GET '/all'
const getAllFunctions = (req , res) => {
  console.log("hi im here get all");
  res.send(projectData);
  };
app.get('/all' , getAllFunctions);

