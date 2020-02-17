let express = require('express');
let app = express();

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
    response.render('contact');
});

app.get('/profile/:name', function(request, response){
    let data = {age: 29, job: 'lawyer', 'hobbies': ['hiking', 'fishing', 'reading']};
    response.render('profile', {person: request.params.name, data: data});
})

app.listen(3000);

