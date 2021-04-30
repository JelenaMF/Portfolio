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
    console.log('404 error handler called');

    res.status(404).render('page-not-found');
})
//error handler to catch global errors
app.use((err, req, res, next) => {
    res.locals.error = err; 
    if(err.status === 404) {
        err.message = `Oops! Looks like the project you're looking for is not found 😥`;
        res.status(404).render('page-not-found', {err});
    } else {
        err.message = `Oops! Looks like something went wrong with the server 😥`;
        res.status(err.status || 500).render('error', {err});
    }
}); 

app.listen(3000, () => {
    console.log('This app is running on localhost: 3000!');
});
