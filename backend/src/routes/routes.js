const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
    res.send('Bienevenido a node js con docker')
})

module.exports = router;