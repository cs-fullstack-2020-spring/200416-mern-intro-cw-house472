let express = require('express');
let router = express.Router();

router.use(express.json());
//create new document
let CharacterCollection = require('../models/CharactersSchema')

//get all request
router.get('/', (req, res)=>{
    // res.send(' get all request')
    CharacterCollection.find({}, (errors, results)=>{
        errors ? res.send(errors) : res.send(results)
    }) 

});
// create request
router.post('/', (req, res)=>{
    // res.send(' create request')
    CharacterCollection.create(req.body, (errors, results)=>{
        errors ? res.send(errors) : res.send(results)
    })     
});

module.exports = router;