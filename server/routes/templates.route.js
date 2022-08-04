const express = require('express');
const {
  createTemplate,
  getTemplates,
} = require('../controllers/template.controller');
const router = express.Router();

router.route('/').get(getTemplates).post(createTemplate);

module.exports = router;
