const express = require('express');
const books = require('../routes/books');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/books', books);
  app.use(error);
}