function AnimalsService() {
    
        // WHATS PRIVATE?
        // DUMMY DATA
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
    
        
        var id = 0;
        function Animal(config){
            this.title = config.title.value
            this.type = config.type.value
            this.breed = config.breed.value
            this.age = config.age.value
            this.price = config.price.value
            this.contact = config.contact.value
            this.location = config.location.value
            this.description = config.description.value
            this.img = config.img.value
            this.id = id++
        }
    
        // PUBLIC?
    
        this.getAnimals = function getAnimals(){
            return animals
        }
        
        this.getAnimal = function getAnimal(id){
            for (var i = 0; i < animals.length; i++) {
                var animal = animals[i];
                if(id == animal.id){
                    return animal
                }
            }
        }
    
        this.addAnimal = function addAnimal(form){
            var newAnimals = new Animal(form)
            animals.unshift(newAnimals)
        }
    
    }