var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var genreSchema = new Schema({
    id:Number,
    name:String
});



var Genre = mongoose.model('genre',genreSchema);

module.exports = Genre;
