const express = require('express');
const app = express();
const routes = require('./routes')
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.use('/', routes);

//route to the about page
app.get('/about', (req,res) => {
    res.render('about');
});

//error handler to catch 404
app.use((req, res, next) => {
    const err = new Error();
    err.status = 404;
    next(err);
})

//error handler to catch global errors
app.use((err, req, res, next) => {
    res.locals.error = err; 
    if(err.status === 404) {
        console.log('404 error handler called');
        err.message = `Oops! Looks like the project you're looking for doesn't exist 😥`;
        res.status(404).render('page-not-found', {err});
    } else {
        console.log('500 error handler called');
        err.message = `Oops! Looks like something went wrong with the server 😥`;
        res.status(err.status || 500).render('error', {err});
    }
}); 

app.listen(3000, () => {
    console.log('This app is running on localhost: 3000!');
});
