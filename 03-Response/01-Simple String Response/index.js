let express = require('express');

app = express();


// Simple String Response

// res.send()  --> response er body k nirdes kore
// res.end()   --> response er ses e ki hocche seta nirdes kore

app.get("/one",function(req,res){
    res.send("This is Simple String Response");
});


app.post("/two",function(req,res){
    res.end("This is Simple String Response");  // End dlew hbe send dlew hbw
});


app.listen(8000,function(){
    console.log("Server Run Success");
});