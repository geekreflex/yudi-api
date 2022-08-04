const Template = require('../models/template.model');

const getTemplates = (req, res) => {
  res.send('templates');
};

const createTemplate = (req, res) => {
  const { name, template } = req.body;
  console.log(name, template);
};

module.exports = {
  getTemplates,
  createTemplate,
};
