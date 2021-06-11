const express = require('express');
const bodyParser = require('body-parser');

const templatesRoutes = require('./routes/templates-routes');

const app = express();

app.use(templatesRoutes);

app.listen(5000);
