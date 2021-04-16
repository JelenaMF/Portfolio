const express = require('express');
const router = express.Router();
const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');

//routing to the index 
app.get('/', (req, res) => {
    
    res.render('index');
});

//route to the about page
app.get('/about', (req,res) => {
    console.log('this the about page');
    res.render('about');
});

//route to the project route based on the id of the project
app.get('/project/:id', (req,res) => {
    //render the
    console.log('this the project page');
    res.render('project');
});

//error handler to catch 404

//error handler to catch global errors


app.listen(3000, () => {
    console.log('This app is running on localhost: 3000!');
});