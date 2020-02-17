let express = require('express');
let bodyParser = require('body-parser');
let app = express();

// body parser middleware will pass post data and store in a variable
let urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');

// middleware for our static asset files
// app.use('/assets', function(request, response, next){
//     console.log(request.url)
//     next();
// });

// express has a built in function to do all of the above for static files
app.use('/assets', express.static('assets'));

app.get('/', function(request, response){
    response.render('index');
});

app.get('/contact', function(request, response){
    response.render('contact', {qs: request.query});
});

// post request grabbing data from form, passes form data using middleware, gives us access to request.body data
// pass that body data to html page and render in the view
app.post('/contact', urlencodedParser, function(request, response){
    response.render('contact-success', {data: request.body});
});

app.get('/profile/:name', function(request, response){
    let data = {age: 29, job: 'lawyer', 'hobbies': ['hiking', 'fishing', 'reading']};
    response.render('profile', {person: request.params.name, data: data});
})

app.listen(3000);

