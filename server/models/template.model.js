const mongoose = require('mongoose');

const templateSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    template: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Template = mongoose.model('Template', templateSchema);
module.exports = Template;
