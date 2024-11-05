let express = require('express');
let app = express();


app.get('/', function(req, res) {
    res.send('Hello, World!');
});

app.listen(8000, function() {
    console.log('Server running on port 8000');
});
