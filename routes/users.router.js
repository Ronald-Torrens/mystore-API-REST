const express = require('express');
const router = express.Router();

const UsersService = require('./../services/users.service');
const service = new UsersService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.status(200).json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await service.findOne(id);
  res.status(200).json(user);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser);
});

router.patch('/:id', async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const updateUser = await service.update(id, body);
  res.status(201).json(updateUser);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleteUser = await service.delete(id);
  res.status(200).json(deleteUser);
});

module.exports = router;
