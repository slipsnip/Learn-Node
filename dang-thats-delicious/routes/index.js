const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  if (req.query.hasOwnProperty('name')) {
    res.send(`Your name is ${req.query.name}`);
  }
  else res.send('Hey! It works!');
});

module.exports = router;
