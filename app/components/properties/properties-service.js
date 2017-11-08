function PropertiesService() {
    
        // WHATS PRIVATE?
        // DUMMY DATA
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
    
        // PUBLIC?
    
        this.getProperties = function getProperties(){
            return properties
        }
        
        this.getProperty= function getProperty(id){
            for (var i = 0; i < properties.length; i++) {
                var property = properties[i];
                if(id == property.id){
                    return property
                }
            }
        }
    
        this.addProperty = function addProperty(form){
            var newProperties = new Property(form)
            properties.unshift(newProperties)
        }
    
    }