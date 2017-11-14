var express = require('express')
var bp = require('body-parser')
var server = express()
var port = 3001

// middleware
server.use(express.static(__dirname + '/public'))
server.use(bp.json())
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
var animals = [{
    id: 'asdfkljsdafdsaflklkijsenn',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: '3 months',
    price: 1000,
    description: 'Sweetest Dog you will ever meet!',
    location: 'Boise',
    contact: 'testcar@cars.auto',
    img: '//loremflickr.com/200/200/dog',
    title: 'Cute Golden Retriever'
}]
var properties = [{
    id: 'asdiinlilijlkmnen',
    type: 'House',
    bedRooms: 4,
    bathRooms: 2,
    sqFeet: 1900,
    garage: 'Yes',
    basement: 'No',
    hoa:'no',
    yearBuilt: 2003,
    price: 260000,
    description: 'Newer house for family in great location!',
    location: 'Boise',
    contact: 'testhouse@house.home',
    img: '//loremflickr.com/200/200/house',
    title: 'Great Family Home'
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
server.get('/api/animals', (req, res, next) => {
    res.send(animals)
})
server.post('/api/animals', (req, res, next) => {
    animals.push(req.body)
    res.send({ message: 'You have successfully created a new animal-listing' })
})
server.delete('/api/animals/:index', (req, res, next) => {
    if (animals[req.params.index]) {
        animals.splice(req.params.index, 1)
        res.send({ message: 'You have successfully deleted an animal-listing' })
    } else {
        res.status(400).send({ error: 'Bad index provided' })
    }
})
server.get('/api/properties', (req, res, next) => {
    res.send(properties)
})
server.post('/api/properties', (req, res, next) => {
    properties.push(req.body)
    res.send({ message: 'You have successfully created a new property-listing' })
})
server.delete('/api/properties/:index', (req, res, next) => {
    if (properties[req.params.index]) {
        properties.splice(req.params.index, 1)
        res.send({ message: 'You have successfully deleted an property-listing' })
    } else {
        res.status(400).send({ error: 'Bad index provided' })
    }
})

server.listen(port, () => {
    console.log('server is running on port', port)
})
console.log(autos)