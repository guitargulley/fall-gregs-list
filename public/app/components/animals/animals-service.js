function AnimalsService() {
    
        var baseUrl = 'http://localhost:3001/api/animals'
        // WHATS PRIVATE?
        // DUMMY DATA
        var animals = []
    
        
        
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
            
        }
    
        function logError(err){
            console.log(err)
        }
        // PUBLIC?
    
        this.getAnimals = function getAnimals(cb){
            if(!cb || typeof cb != 'function'){console.error('you need a callback')}
            $.get(baseUrl)
                .then( res => {
                    animals = res
                    cb(animals)
                })
                .fail(logError)
        }
        
        this.getAnimal = function getAnimal(id){
            for (var i = 0; i < animals.length; i++) {
                var animal = animals[i];
                if(id == animal.id){
                    return animal
                }
            }
        }
    
        this.addAnimal = function addAnimal(form, getAnimals){
            var newAnimals = new Animal(form)
            $.post(baseUrl, newAnimals)
                .then(getAnimals)
                .fail(logError)
        }
        
        this.removeAnimal = function removeAnimal(id, getAnimals){
            $.ajax({
                url: baseUrl + '/' + id,
                method: 'DELETE'
            })
                .then(getAnimals)
                .fail(logError)
        }
    
    }