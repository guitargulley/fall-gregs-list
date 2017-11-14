function PropertiesService() {
    

        var baseUrl = 'http://localhost:3001/api/properties'
        // WHATS PRIVATE?
        // DUMMY DATA
        var properties = []
    
        
        var id = 0;
        function Property(config){
            this.title = config.title.value
            this.type = config.type.value
            this.bedRooms = config.bedRooms.value
            this.bathRooms = config.bathRooms.value
            this.sqFeet = config.sqFeet.value
            this.garage = config.garage.value
            this.basement = config.basement.value
            this.hoa = config.hoa.value
            this.yearBuilt = config.yearBuilt.value
            this.price = config.price.value
            this.contact = config.contact.value
            this.location = config.location.value
            this.description = config.description.value
            this.img = config.img.value
            this.id = id++
        }
    
        function logError(err){
            console.log(err)
        }
        // PUBLIC?
    
        this.getProperties = function getProperties(cb){
            if(!cb || typeof cb != 'function'){console.error('you need a callback')}
            $.get(baseUrl)
                .then( res => {
                    properties = res
                    cb(properties)
                })
                .fail(logError)
        }
        
        this.getProperty= function getProperty(id){
            for (var i = 0; i < properties.length; i++) {
                var property = properties[i];
                if(id == property.id){
                    return property
                }
            }
        }
    
        this.addProperty = function addProperty(form, getProperties){
            var newProperties = new Property(form)
            $.post(baseUrl,newProperties)
                .then(getProperties)
                .fail(logError)
        }
        
        this.removeProperty = function removeProperty(index, getProperties){

            $.ajax({
                url: baseUrl + '/' + index, 
                method: 'DELETE'
            })
                .then(getProperties)
                .fail(logError)
        }
    
    }