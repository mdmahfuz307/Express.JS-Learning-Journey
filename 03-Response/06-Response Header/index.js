let express = require('express');

app = express();

app.get("/six",function(req,res){
    
    res.append("name","Mahfuz Nirob");
    res.append("city","Dhaka");
    res.append("age","24 Years Old");

    res.send();
    res.status(201).end("Hello World");
});

app.listen(8000,function(){
    console.log("Server Run Success");
});