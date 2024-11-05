let express = require('express');

app = express();

app.get("/Bangladesh",function(req,res){
    res.redirect("http://localhost:8000/India");
});


app.get("/India",function(req,res){
    res.send("This is india");
});


app.listen(8000,function(){
    console.log("Server Run Success");
});