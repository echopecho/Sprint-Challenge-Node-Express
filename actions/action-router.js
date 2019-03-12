const express = require('express');
const Action = require('../data/helpers/actionModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const actions = await Action.get();
    res.status(200).json(actions);
  } catch (e) {
    res.status(500).json({err: "Something went wrong with the server."})
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const action = await Action.get(id);
    res.status(200).json(action);  
  } catch (e) {
    res.status(500).json({err: "Something went wrong with the server."})
  }
});

router.post('/', async (req, res) => {
  const newAction = req.body;

  try {
    const action = await Action.insert(newAction);
    res.status(201).json(action);
  } catch (e) {
    res.status(500).json({err: "Something went wrong with the server."});
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedAction = req.body;

  try {
    const action = await Action.update(id, updatedAction);
    if(action) {
      res.status(201).json(action);
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
    const count = await Action.remove(id);
    if(count === 1) {
      res.status(201).json({message: "Action deleted."})
    } else {
      res.status(404).json({error: "ID does not exist"})
    }
  } catch (e) {
    res.status(500).json({err: "Something went wrong with the server."})
  }
});


module.exports = router;