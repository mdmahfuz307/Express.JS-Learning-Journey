let express = require('express');
let multer = require('multer');
let multer = multer();


let app = express();
// for parsing multipart/form-data
app.use(multer.array());
app.use(express.static('public'));


app.post("/",function(req,res){

    let ReqBody = req.body;

    res.send(JSON.stringify(ReqBody));

});

// Postman e giye Body te jabo than form-data select kore key and value add korbo

app.listen(8000,function(){
    console.log("Server Run Success");
});