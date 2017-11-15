function InstrumentsService() {
    
        var baseUrl = 'http://localhost:3001/api/instruments'
        // WHATS PRIVATE?
        // DUMMY DATA
        var instruments =[]
        
        function Instrument(config){
            this.title = config.title.value
            this.type = config.type.value         
            this.year = config.year.value
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
        this.getInstruments = function getInstruments(cb){
            if(!cb || typeof cb != 'function'){console.error('you need a callback')}
            $.get(baseUrl)
                .then(res =>{
                    instruments = res
                    console.log(instruments)
                    cb(instruments)
                })
                .fail(logError)
        }
        
        this.getInstrument = function getInstrument(id){
            for (var i = 0; i < instruments.length; i++) {
                var instrument = instruments[i];
                if(id == instrument.id){
                    return instrument
                }
            }
        }
    
        this.addInstrument = function addInstrument(form, getInstruments){
            var newInstrument = new Instrument(form)
            $.post(baseUrl, newInstrument)
                .then(getInstruments)
                .fail(logError)
        }
        this.removeInstrument = function removeInstrument(id, getInstruments){
    
            $.ajax({
                url: baseUrl + '/' + id,
                method: 'DELETE'
            })
            .then(getInstruments)
            .fail(logError)
        }
    
    }