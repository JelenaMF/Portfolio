const express = require('express');
const app = express();
const routes = require('./routes')
app.use(express.static('public'));


app.set('view engine', 'pug');



app.use('/', routes);

//route to the about page
app.get('/about', (req,res) => {
    console.log('this the about page');
    res.render('about');
});



//error handler to catch 404

//error handler to catch global errors


app.listen(3000, () => {
    console.log('This app is running on localhost: 3000!');
});