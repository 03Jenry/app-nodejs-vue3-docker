const express = require('express');
const router = new express.Router();

const tutorials = require('./tutorial.js');

router.get('/', (req, res) => {
    res.send('Bienevenido a node js con docker')
})

router.use(tutorials);

module.exports = router;