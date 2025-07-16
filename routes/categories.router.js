const express = require('express');
const router = express.Router();

const CategoriesService = require('./../services/categories.service');
const service = new CategoriesService();

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.status(200).json(categories)
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const category = await service.findOne(id);
  res.status(200).json(category);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newCategory = await service.create(body);
  res.status(201).json(newCategory);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updateCategory = await service.update(id, body);
  res.status(201).json(updateCategory);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleteCategory = await service.delete(id);
  res.status(200).json(deleteCategory);
});

module.exports = router;
