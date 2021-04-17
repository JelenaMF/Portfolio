const express = require('express');
const router = express.Router();

const {projects} = require('./data/projects.json');

//create route to home page
router.get('/', (req, res) => {
    //pass all project data to index template
    res.render('index', {projects})
});

//route to the project route based on the id of the project
router.get('/projects/:id', (req,res) => {
    //render project page 
    const projectId = req.params.id;
    const project = projects.find(({id}) => id === +projectId)
    if(project) {
        res.render('project', {project});
        console.log(project.project_name);
    } else {
        res.sendStatus(404);
    }
    console.log('this the project page');
    res.render('project');
});
//get the project id    

    //render the matching project id 

//export router
module.exports = router;