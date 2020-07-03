const check = require('express-validator/check').check;

exports.createTagValidator = [
  check('name').not().isEmpty().withMessage('Name is required'),
];
