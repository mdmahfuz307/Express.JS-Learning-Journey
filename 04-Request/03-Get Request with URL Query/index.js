let express = require('express');

app = express();

app.get("/",function(req,res){

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName + " " + lastName);
});

// http://localhost:8000?firstName=Nirob&lastName=Mahfuz (ai ta use kore post man e get request debo)

app.listen(8000,function(){ 
    console.log("Server Run Success");
});