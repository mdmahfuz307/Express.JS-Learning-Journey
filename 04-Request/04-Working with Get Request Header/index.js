let express = require('express');

app = express();

app.get("/",function(req,res){
    
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    res.end(firstName + " " +lastName);

});

// Postman e Headers e giye fistName & lastName add korte hobe

app.listen(8000,function(){
    console.log("Server Run Success");
});