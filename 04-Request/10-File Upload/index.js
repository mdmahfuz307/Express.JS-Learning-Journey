let express = require('express');
let multer = require('multer');
let app = express();


let storage = multer.diskStorage({

    destination:function (req,file,callback) {
        callback(null,'./uploads');
    },
    filename:function (req,file,callback){
        callback(null,file.originalname);
    }
});


// PostMan e giye Body te jbo than Form-data select kore KEY er name dlm (myfile) KEY er type dbo File tha VALUE te select Files e giye file upload dye debo.

let upload = multer({storage:storage}).single('myfile');
app.post("/",function(req,res){

    upload(req,res,function(error){
        if(error){
            return res.end("Error uploading file");
        }
        else{
        res.end("File is uploaded successfully!");
        }
    });
});


app.listen(8000,function(){
    console.log("Server Run Success");
});