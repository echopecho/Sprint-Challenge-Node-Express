const express = require('express');
const Project = require('../data/helpers/projectModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Project.get();
    res.status(200).json(projects);
  } catch (e) {
    res.status(500).json({err: "Something went wrong with the server."})
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.get(id);
    res.status(200).json(project);  
  } catch (e) {
    res.status(500).json({err: "Something went wrong with the server."})
  }
});

router.get('/:id/actions', async (req, res) => {
  const { id } = req.params;

  try {
    const actions = await Project.getProjectActions(id);
    if(actions.length > 0) {
      res.status(200).json(actions);
    } else {
      res.status(404).json({error: "There are no actions."})
    }
    
  } catch (e) {
    res.status(500).json({err: "Something went wrong with the server."})
  }
})

router.post('/', async (req, res) => {
  const newProject = req.body;

  try {
    const project = await Project.insert(newProject);
    res.status(201).json(project);
  } catch (e) {
    res.status(500).json({err: "Something went wrong with the server."});
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedProject = req.body;

  try {
    const project = await Project.update(id, updatedProject);
    if(project) {
      res.status(201).json(project);
    } else {
      res.status(400).json({error: "ID does not exist"})
    }
  } catch (e) {
    res.status(500).json({err: "Something went wrong with the server."})
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const count = await Project.remove(id);
    if(count === 1) {
      res.status(201).json({message: "Project deleted."})
    } else {
      res.status(404).json({error: "ID does not exist"})
    }
  } catch (e) {
    res.status(500).json({err: "Something went wrong with the server."})
  }
});

module.exports = router;