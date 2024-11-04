let express = require('express');

app = express();



app.get("/one",function(req,res){
    res.send("This is Simple String Response");
});


app.post("/two",function(req,res){
    res.end("This is Simple String Response");
});


app.get("/three",function(req,res){
    res.status(401).end("Unauth");  // End er vitor kicu dlew hbe na dlew hbe
});


app.listen(8000,function(){
    console.log("Server Run Success");
});