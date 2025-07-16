
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Ronald Torrens',
      age: 34,
      role: 'Backend Developer',
      seniority: 'Junior'
    },
    {
      id: 2,
      name: 'César Torrens',
      age: 34,
      role: 'Frontend Developer',
      seniority: 'Senior'
    },
  ])
});

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json([
    {
      id,
      name: 'María Torrens',
      age: 30,
      role: 'Quality Assurance',
      seniority: 'Senior'
    },
  ])
});

module.exports = router;
