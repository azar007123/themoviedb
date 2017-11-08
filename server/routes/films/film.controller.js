module.exports = (function () {
    var Film = require('./film.model.js')

    var getAll = function (req, res) {
        Film.find()
            .populate('genre')
            .exec()
            .then(function (films) {
                res.status(200).json(films);
            })
            .catch(function (err) {
                res.status(500).send(err);
            })

    }

    var getOne = function (req, res) {
        Film.findById(req.params.id)
            .exec()
            .then(function (film) {
                res.status(200).json(film);
            })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }
    var getByQuery = function (req, res) {
        Film.find({title:req.query.title})
            .exec()
            .then(function (film) {
                res.status(200).json(film);
            })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    var insertOne = function(req,res) {
        var nuovoFilm = new Film(req.body);
        nuovoFilm.save()
            .then()
            .cacth();

    }

    return {
        getAll: getAll,
        getOne: getOne,
        getByQuery: getByQuery,
        insertOne: insertOne
    }
})();