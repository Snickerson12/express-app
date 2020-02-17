let express = require('express');

// sets up express app
let app = express();

// set up get request routes 
app.get('/', function(request, response){
    response.send('this is the homepage');
});

app.get('/contact', function(request, response){
    response.send('this is the contact page');
});

// dynamic url parameters
app.get('/profile/:id', function(request, response){
    response.send('You requested to see a profile with the ID of ' + request.params.id);
})

app.get('/profile/:name', function(request, response){
    response.send('You requested to see a profile with the name of ' + request.params.id);
})

// listens to the port
app.listen(3000);