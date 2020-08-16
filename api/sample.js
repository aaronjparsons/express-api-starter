const express = require('express');
const router = express.Router();

// Get All
router.get('/', (req, res, next) => {
  res.json({
    message: 'Sample - Get All'
  })
});

// Get One
router.get('/:id', (req, res, next) => {
  res.json({
    message: 'Sample - Get One'
  })
});

// Create One
router.post('/', (req, res, next) => {
  res.json({
    message: 'Sample - Create One'
  })
});

// Update One
router.patch('/:id', (req, res, next) => {
  res.json({
    message: 'Sample - Update One'
  })
});

// Delete One
router.delete('/:id', (req, res, next) => {
  res.json({
    message: 'Sample - Delete One'
  })
});

module.exports = router;