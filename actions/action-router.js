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


module.exports = router;