function InstrumentsController() {
    var instrumentsService = new InstrumentsService()
  
    // Buttons
    // Add New Auto
    // Delete Auto
    // Report Flag
    // View More
    // Filter / Search
    var instrumentsElem = document.getElementById('instruments-list')
    var instrumentFormElem = document.getElementById('add-instrument-form')
    var showButton = document.getElementById('show-instruments-button')
  
    function getInstruments(){
    
      instrumentsService.getInstruments(drawInstruments)
    }
  
    function drawInstruments(instruments) {
      // WHERE ARE ALL THE AUTOS?
      var template = ''
      for (var i = 0; i < instruments.length; i++) {
        var instrument = instruments[i];
        template += `
              <div class="col-md-3">
                  <div class="panel panel-info">
                      <div class="panel-heading">
                      <i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.instrumentsCtrl.removeInstrument('${instrument._id}')"></i>                    
                          <h3>${instrument.title}</h3>
                          <h6>${instrument.location}</h6>
                      </div>
                      <div class="panel-body text-center">
                          <img src="${instrument.img}" class="img-responsive">
                          <h4>${instrument.year} - ${instrument.type}</h4>
                      </div>
                      <div class="panel-footer">
                          <h5>$ ${instrument.price}</h5>
                      </div>
                  </div>
              </div>
              `
      }
      instrumentsElem.innerHTML = template
    }
  
    this.addInstrument = function addInstrument(event) {
        debugger
      event.preventDefault()
      var form = event.target
      instrumentsService.addInstrument(form, getInstruments)
      instrumentFormElem.classList.toggle('hidden', true)
      document.getElementById('addInstrumentsForm').reset()
      this.showAddInstrumentForm()
    }
  
    this.removeInstrument = function removeInstrument(id){
      debugger
      instrumentsService.removeInstrument(id, getInstruments)
    }
  
    this.showInstruments = function showInstruments(){
      document.getElementById('instruments-section').classList.remove('hidden')
      document.getElementById('categories').classList.add('hidden')
      
      
    }
    this.hideInstruments = function hideInstruments(){
      document.getElementById('instruments-section').classList.add('hidden')
      document.getElementById('categories').classList.remove('hidden')
      
    }
    var formstate = false
    this.showAddInstrumentForm = function showAddInstrumentForm() {
        debugger
      if (formstate) {
        showButton.innerText = 'Add Listing'
        showButton.className = 'btn btn-info'
        instrumentFormElem.classList.add('hidden')
        formstate = false
      } else {
        showButton.innerText = 'Cancel'
        showButton.className = 'btn btn-danger'
        instrumentFormElem.classList.remove('hidden')
        formstate = true
      }
    }
  
    getInstruments()
  }