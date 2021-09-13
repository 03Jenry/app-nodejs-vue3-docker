const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/routes');

//app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(routes);

app.listen(5000, () => console.log('Server is up and running'));