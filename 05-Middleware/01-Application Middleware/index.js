let express = require('express');
let app = express();

app.use(function(req,res,next){

    console.log("I am application level middleware");
    next();
})

app.get('/', function(req, res) {
    res.send("This is Home page");
});

app.get('/contact', function(req, res) {
    res.send("This is contact page");
});



app.listen(8000, function() {
    console.log('Server running on port 8000');
});
