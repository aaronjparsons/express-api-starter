const express = require('express');
const router = express.Router();

// Route Files
const sample = require('./sample');

// API Entry Route
router.get('/', (req, res, next) => {
  res.json({
    message: 'API V1 - Welcome!'
  });
});

// Set Routes
router.use('/sample', sample);

module.exports = router;