let express = require('express');
let app = express();

app.set('view engine', 'ejs');

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

