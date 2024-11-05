let express = require('express');

app = express();

app.get("/Seven",function(req,res){
    res.cookie('name','Nirob');
    res.cookie('city','Gazipur');
    res.cookie('age','30 years old');
    res.end('cookie set success');
});

app.listen(8000,function(){
    console.log("Server Run Success");
});