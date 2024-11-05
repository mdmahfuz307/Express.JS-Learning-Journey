let express = require('express');

app = express();



// http://localhost:8000?firstName=Nirob&lastName=Mahfuz (ai ta use kore post man e get request debo)

app.listen(8000,function(){ 
    console.log("Server Run Success");
});