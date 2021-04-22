const express = require('express');
const app = express();
const routes = require('./routes')
app.use(express.static('public'));


app.set('view engine', 'pug');



app.use('/', routes);

//route to the about page
app.get('/about', (req,res) => {
    res.render('about');
});



//error handler to catch 404
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})
//error handler to catch global errors
app.use((err, req, res, next) => {
    res.locals.error = err; 
    res.status(err.status);
    res.render('error');
}); 

app.listen(3000, () => {
    console.log('This app is running on localhost: 3000!');
});