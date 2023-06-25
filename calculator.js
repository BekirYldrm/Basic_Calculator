import express  from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
 
const __filename = fileURLToPath(import.meta.url); // for dirname use .
const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/" , function(req , res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req , res){
     var num1 = req.body.num1;
     var num2 = req.body.num2;
     var result = Number(num1) + Number(num2)
    res.send("result : " + result);
});

app.get("/bmicalculator" , function(req , res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator" , function(req , res) { 
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight)
    var bmi = weight / (height * height) ; 
    res.send("result : " + bmi);
});
app.listen(3000 , function(){
    console.log("başladı");
});
