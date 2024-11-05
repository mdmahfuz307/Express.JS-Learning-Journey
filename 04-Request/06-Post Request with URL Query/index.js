let express = require('express');

app = express();

app.post("/",function(req,res){

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.send(firstName + " " + lastName);
});

// http://localhost:8000?firstName=Mahfuz&lastName=Nirob(ai ta use kore post man e Post request debo)

app.listen(8000,function(){
    console.log("Server Run Success");
});