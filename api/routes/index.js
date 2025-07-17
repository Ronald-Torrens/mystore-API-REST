
const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {

  const router = express.Router();
  app.use('/api/v1', router) // creación de ruta global.

  router.use(`/products`, productsRouter);
  router.use(`/users`, usersRouter);
  router.use(`/categories`, categoriesRouter);
};

module.exports = routerApi;
