const Joi = require('joi');

const id = Joi.string().uuid();
const productName = Joi.string().min(3).max(50);
const cost = Joi.number().integer().min(10);
const description = Joi.string().min(3).max(100);
const image = Joi.string().uri();

const createOrderSchema = Joi.object({
  productName: productName.required(),
  cost: cost.required(),
  description: description.required(),
  image: image.required(),
});

const updateOrderSchema = Joi.object({
  productName: productName,
  cost: cost,
  description: description,
  image: image,
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema };
