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

router.post('/', async (req, res) => {
  const newProject = req.body;

  try {
    const project = await Project.insert(newProject);
    res.status(200).json(project);
  } catch (e) {
    res.status(500).json({err: "Something went wrong with the server."});
  }
})

module.exports = router;