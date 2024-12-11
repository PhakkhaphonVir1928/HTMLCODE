const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// เส้นทางแรกสำหรับการคำนวณผลลัพธ์ (Add)
app.get("/", (req, res)=>{
   res.sendFile(__dirname+"/public/index.html");
 } ); 

app.post("/", (req, res) => {
   console.log(req.body);        
   console.log(req.body.num1);
   console.log(req.body.num2);
   var result = Number(req.body.num1) + Number(req.body.num2);
   res.send("ผลการคำนวณคือ: " + result);
});

// เส้นทางที่สองสำหรับ BMI Calculator
app.get("/bmiCalculator", (req, res)=>{
   res.sendFile(__dirname+"/public/bmiCalculator.html");
 } ); 

app.post("/bmiCalculator", (req, res) => {
   var weight = parseFloat(req.body.weight);
   var height = parseFloat(req.body.height);

   // คำนวณค่า BMI
   var bmi = weight / (height * height);
   var description = "";

   // ระบุเกณฑ์ของ BMI
   if (bmi < 18.5) {
      description = "คุณมีน้ำหนักน้อย (Underweight)";
   } else if (bmi >= 18.5 && bmi <= 24.9) {
      description = "คุณมีน้ำหนักปกติ (Normal weight)";
   } else if (bmi >= 25 && bmi <= 29.9) {
      description = "คุณมีน้ำหนักเกิน (Overweight)";
   } else {
      description = "คุณอ้วน (Obesity)";
   }

   res.send("คุณมีค่า BMI = " + bmi.toFixed(2) + " , คุณอยู่ในเกณฑ์ = " + description);
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(3000, () => {
   console.log("Server is running on port 3000");  
});
app.get('/style.css', (req, res) => {
   res.sendFile(__dirname + '/public/style.css');
});

