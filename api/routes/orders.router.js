
const express = require('express');
const router = express.Router();

const OrdersService = require('../services/orders.service');
const service = new OrdersService();

const validatorHandler = require('../middleware/validator.handler');
const { createOrderSchema, getOrderSchema, updateOrderSchema } = require('../schemas/orders.schemas');

router.get('/', async (req, res, next) => {
  try {
    const orders = await service.find();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  };
});

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.status(200).json(order);
    } catch (error) {
      next (error);
    }
  }
);

router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    };
  }
);

router.patch('/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateOrder = await service.update(id, body);
      res.status(201).json(updateOrder);

    } catch (error) {
      next(error);
    };
  }
);

router.delete('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteOrder = await service.delete(id);
      res.status(200).json(deleteOrder);
    } catch (error) {
      next(error);
    };
  }
);

module.exports = router;
