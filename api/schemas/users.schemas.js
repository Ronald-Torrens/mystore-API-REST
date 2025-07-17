const Joi = require('joi');

const id = Joi.string().uuid();
const userName = Joi.string().min(3).max(50);
const firstName = Joi.string().min(3).max(50);
const lastName = Joi.string().min(3).max(50);
const email = Joi.string().min(3).max(50);
const phone = Joi.string().min(9);

const createUserSchema = Joi.object({
  userName: userName.required(),
  firstName: firstName.required(),
  lastName: lastName.required(),
  email: email.required(),
  phone: phone.required(),
});

const updateUserSchema = Joi.object({
  userName: userName,
  firstName: firstName,
  lastName: lastName,
  email: email,
  phone: phone,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
