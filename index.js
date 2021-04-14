const express = require('express');
const app = express();

//routing to the index 
app.get('/', (req, res) => {
    res.send('This is the start of the profile');
});


app.listen(3000);