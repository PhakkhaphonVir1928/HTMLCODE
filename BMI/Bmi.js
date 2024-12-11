const express = require('express');
var bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmiCalculator", (req, res)=>{
    //res.send("Hello World");
    res.sendFile(__dirname + "/bmiCalculator.html")
  } );
  
  app.post("/bmiCalculator", (req,res)=>{
    res.send("คุณมีค่า BMI = " + BMI + " , คุณอยู่ในเกณฑ์ = " + description);
  });

  app.listen(3000, ()=> {
    console.log ("Server is running on port 3000");
 });