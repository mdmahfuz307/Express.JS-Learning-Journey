let express = require('express');

app = express();

app.post("/",function(req,res){
    res.send("This is Simple post request");
});

// Browser e giye hit krle hbe na cz Browser e kono Post request jai na tai PostMan use krte hbe

app.listen(8000,function(){
    console.log("Server Run Success");
});