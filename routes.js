const express = require('express');
const router = express.Router();

const {projects} = require('./data/projects.json');

//create route to home page
router.get('/', (req, res) => {
    //pass all project data to index template
    res.render('index', {projects})
});

router.get('/error', (req, res, next) => {

    // Log out custom error handler indication
    console.log('Server error');
  
    const err = new Error();
    err.message = `Custom 500 error thrown`
    err.status = 500;
    throw err;
  });

//route to the project route based on the id of the project and create an error page 
router.get('/projects/:id', (req,res, next) => {
    //render project page 
    const projectId = req.params.id;
    //render the matching project id 
    const project = projects.find(({id}) => id === +projectId)
    if(project) {
        res.render('project', {project});
    } else {
        const err = new Error();
        err.status = 404;
        err.message = 'Looks like the requested project does not exist.';
        next(err);
    }
});


//export router
module.exports = router;