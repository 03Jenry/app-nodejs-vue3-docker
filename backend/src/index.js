const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

const routes = require('./routes');

/*var corsOptions = {
    origin: "http://localhost:5000"
};*/
  
//app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync();

app.use(express.json());
app.use(routes);

app.listen(5000, () => console.log('Server is up and running'));