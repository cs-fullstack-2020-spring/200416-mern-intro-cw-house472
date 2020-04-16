let mongoose = require('mongoose');
let Schema= mongoose.Schema;

let CharacterSchema = new Schema(
    {
        name: String, 
        gender: String,
        age: Number
    }
);
module.exports = mongoose.model('characters200416', CharacterSchema)