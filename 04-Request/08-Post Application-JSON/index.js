let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());


app.post("/",function(req,res){
    let JSONData = req.body;

    let JSONString = JSON.stringify(JSONData);
    // JSON takhe specific kono data dhorte chaile [ let name = JSONData['name'];  ]
    res.send(JSONString);
});


app.listen(8000,function(){
    console.log("Server Run Success");
});