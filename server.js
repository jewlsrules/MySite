const express = require('express');
const app = express();
const routesController = require('./controllers/pages.js');
require('dotenv').config()

// Port ===============
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('listening on port', PORT)
});

// Middleware =========
app.use(express.json());
app.use(express.static('public'));
app.use('/route', routesController);
