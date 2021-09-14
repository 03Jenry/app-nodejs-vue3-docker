const express = require('express');
const router = new express.Router();

const tutorials = require("../controllers/tutorial.js");

// Create a new Tutorial
router.post("/store", tutorials.create);

// Retrieve all Tutorials
router.get("/index", tutorials.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", tutorials.findOne);

// Update a Tutorial with id
router.put("/:id", tutorials.update);

// Delete a Tutorial with id
router.delete("/:id", tutorials.remove);

// Delete all Tutorials
router.delete("/", tutorials.removeAll);

router.use('/api/tutorials', router);


module.exports = router;