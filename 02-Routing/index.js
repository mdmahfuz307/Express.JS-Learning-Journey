let express = require('express');

app = express();

app.get("/",function(req,res){    // Browser just get request dte pare post,put ai gula pare na tai amra oi gula Postman dye check krbo.
    res.send("Home Page ");
});



app.post("/about",function(req,res){
    res.send("About Page");
});



app.put("/contact",function(req,res){
    res.send("Contact Page");
});



app.delete("/terms",function(req,res){
    res.send("Terms Page");
});



app.listen(8000,function(){
    console.log("Server Run Success");
});