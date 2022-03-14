const express = require('express');
const router = express.Router();

// Define the home page route
router.get('/', function(req, res) {
  res.send('Home page');
});

// Define the foo route
router.get('/foo', function(req, res) {
  res.send({ response: 'Hello' });
});

// Define the bar route
router.get('/bar', function(req, res) {
  res.send({ response: 'World' });
});


module.exports = router;