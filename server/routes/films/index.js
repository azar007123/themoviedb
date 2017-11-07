var express = require('express');
var filmController = require('./film.controller.js');

var films = express.Router();

films.get('/', filmController.getAll);

module.exports = films;



// films.get('/:id(\\d+)/', (req, res) => {
//     res.send('film con id:' + req.params.id);
// })

// films.get('/movies');

// films.post('/', (req, res) => {
//     var film = req.body;
//     console.log(film.titolo);
//     res.send(film);

// });
