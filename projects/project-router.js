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
})

module.exports = router;