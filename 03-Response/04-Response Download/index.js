let express = require('express');

app = express();


// Response Download
app.get("/five",function(req,res){
    res.download("./uploads/nirob.jpg"); // Browser e sora sori download krte bolbe
});



app.listen(8000,function(){
    console.log("Server Run Success");
});