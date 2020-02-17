let express = require('express');

// sets up express app
let app = express();

// tell express we want to use ejs as view engine
app.set('view engine', 'ejs');

// set up get request routes 
// example one: text string, example two: html files
app.get('/', function(request, response){
    // response.send('this is the homepage');
    response.sendFile(__dirname + '/html/index.html');
});

app.get('/contact', function(request, response){
    response.sendFile(__dirname + '/html/contact.html');
});

// // dynamic url parameters
// app.get('/profile/:id', function(request, response){
//     response.send('You requested to see a profile with the ID of ' + request.params.id);
// })

// use render method for views, pass data as an object
app.get('/profile/:name', function(request, response){
    let data = {age: 29, job: 'lawyer'};
    response.render('profile', {person: request.params.name, data: data});
})

// listens to the port
app.listen(3000);

// template/view engines allow you to embed data and JS code into html files
// allows you to use dynamic content within html files
// EJS <% %> format