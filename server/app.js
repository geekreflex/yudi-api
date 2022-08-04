require('dotenv').config();
require('./configs/db')();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const templates = require('./routes/templates.route');

app.use(cors());

app.use('/api/templates', templates);

const PORT = process.env.PORT || 8400;
const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

start(PORT);
