var Instruments = require('../models/instrument')
var router = require('express').Router()
// WHAT IS AUTOS? RESOURCE
// WHERE IS EXPRESS
router.get('/api/instruments', (req, res, next) => {
    // FIRST JOB is to go get the autos from the db
    Instruments.find({})
        .then(instruments => res.send(instruments))
        .catch(err => res.status(400).send(err))
})

router.get('/api/instruments/:id', (req, res, next) => {
    Instruments.findById(req.params.id)
        .then(instrument => res.send(instrument))
        .catch(err => res.status(400).send(err))
})

//CREATES NEW AUTO
router.post('/api/instruments', (req, res, next) => {
    Instruments.create(req.body)
        .then(instrument => res.send(instrument))
        .catch(err => res.status(400).send(err))
})

router.delete('/api/instruments/:id', (req, res, next) => {
    Instruments.findByIdAndRemove(req.params.id)
        .then((instrument) => {
            res.send({ message: 'Successfully removed auto at ' + req.params.id })
        })
        .catch(err => res.status(400).send(err))
})


module.exports = router