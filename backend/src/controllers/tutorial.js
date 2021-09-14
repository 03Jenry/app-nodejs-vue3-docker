const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
const create = (req, res) => {
    console.log("create");
    // Validate request
    if(!req.body.title){
        res.status(422).send({
            message: "El contenido no puede estar vacio!"
        });
        return;
    }

    // Create a Tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    // Save Tutorial in the database
    Tutorial.create(tutorial)
    .then(data => {
        res.send(data);       
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Se produjo un error al crear el tutorial."
        })
    });
};

// Retrieve all Tutorials from the database.
const findAll = (req, res) => {
    console.log("findAll");
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Tutorial.findAll({ where: condition })
    .then(data => {
        //res.send(data);
        res.json({
            "result":{
                "error" : false,
                "data": data
            } 
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
        });
    });
};

// Find a single Tutorial with an id
const findOne = (req, res) => {
    console.log("findOne");
    const id = req.params.id;
    Tutorial.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status().send({
            message: "Error retrieving Tutorial with id=" + id
        })
    });
};

// Update a Tutorial by the id in the request
const update = (req, res) => {
    console.log("update");
    const id = req.params.id;

    Tutorial.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: "Tutorial was updated successfully."
            });
        }else{
            res.send({
                message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Tutorial with id=" + id
        });
    })
};

// Delete a Tutorial with the specified id in the request
const remove = (req, res) => {
    console.log("remove");
    const id = req.params.id;

    Tutorial.destroy({
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
const removeAll = (req, res) => {
    console.log("removeAll");
    Tutorial.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};

// Find all published Tutorials
const findAllPublished = (req, res) => {
    console.log("findAllPublished");
    Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

module.exports = {
    create,
    findAll,
    findOne,
    update,
    remove,
    removeAll,
    findAllPublished
}