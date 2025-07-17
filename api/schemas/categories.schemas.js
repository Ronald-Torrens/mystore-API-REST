const Joi = require('joi');

const id = Joi.string().uuid();
const category = Joi.string().min(3).max(50);
const design = Joi.string().min(3).max(50);

const createCategorySchema = Joi.object({
  category: category.required(),
  design: design.required(),
});

const updateCategorySchema = Joi.object({
  category: category,
  design: design,
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema };
