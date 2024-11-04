let express = require('express');

app = express();



app.get("/three",function(req,res){

    let MyJSONArray = [
        {
            name : "Nirob",
            city : "Dhaka",
            Occupation : "Software Engr."
        },
        {
            name : "Mahfuz",
            city : "Rajshahi",
            Occupation : "Software Developer"
        },
        {
            name : "Miraz",
            city : "Rangpur",
            Occupation : "Project Manager"
        },

    ]
    res.json(MyJSONArray);
});


app.listen(8000,function(){
    console.log("Server Run Success");
});