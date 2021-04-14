const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');

//routing to the index 
app.get('/', (req, res) => {
    res.render('index');
});


app.listen(3000, () => {
    console.log('This app is running on localhost: 3000!');
});