let express = require('express');

// sets up express app
let app = express();

// set up get request routes 
app.get('/', function(request, response){
    response.send('this is the homepage')
});

app.get('/contact', function(request, response){
    response.send('this is the contact page')
});

// listens to the port
app.listen(3000);