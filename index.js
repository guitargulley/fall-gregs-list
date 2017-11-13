var express = require('express')
var server = express()
var bp = require('body-parser')
var port = 3000

// middleware
server.use(express.static(__dirname + '/public'))
server.use(bp.json)
server.use(bp.urlencoded({ extended: true }))

var autos = [{
    id: 'asdfkljsdafdsaflkj239023u9402u',
    make: 'Honda',
    model: 'Accord',
    year: 1987,
    color: 'Burgandy',
    price: 1800,
    mileage: 323200,
    condition: 'Like New',
    engineId: '3', //GOOD QUESTION
    description: 'Runs great with gas',
    location: 'Boise',
    contact: 'testcar@cars.auto',
    img: '//loremflickr.com/200/200/car',
    title: 'Your New Car'
}]
//getters and setters
server.get('/api/autos', (req, res, next) => {
    res.send(autos)
})
server.post('/api/autos', (req, res, next) => {
    autos.push(req.body)
    res.send({ message: 'You have successfully created a new auto-listing' })
})
server.delete('/api/autos/:index', (req, res, next) => {
    if (autos[req.params.index]) {
        autos.splice(req.params.index, 1)
        res.send({ message: 'You have successfully deleted an auto-listing' })
    } else {
        res.status(400).send({ error: 'Bad index provided' })
    }
})
server.listen(port, () => {
    console.log('server is running on port', port)
})