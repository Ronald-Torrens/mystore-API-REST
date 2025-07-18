const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(50);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(3).max(100);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description: description,
  image: image,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
