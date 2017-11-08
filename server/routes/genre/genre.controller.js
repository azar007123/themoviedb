module.exports = (function () {
    var Genre = require('./genre.model.js')

    var getAll = function (req, res) {
        Genre.find()
            .exec()
            .then(function (genres) {
                res.status(200).json(genres);
            })
            .catch(function (err) {
                res.status(500).send(err);
            })

    }


    return {
        getAll: getAll,
       
    }
})();