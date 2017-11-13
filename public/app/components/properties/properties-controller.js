function PropertiesController() {
    var propertiesService = new PropertiesService()
  
    // Buttons
    // Add New Auto
    // Delete Auto
    // Report Flag
    // View More
    // Filter / Search
    var propertiesElem = document.getElementById('properties-list')
    var propertiesFormElem = document.getElementById('add-property-form')
    var showButton = document.getElementById('show-properties-button')
    function drawProperties() {
        
      // WHERE ARE ALL THE AUTOS?
      var properties = propertiesService.getProperties()
      var template = ''
      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];
        template += `
              <div class="col-md-3">
                  <div class="panel panel-info">
                      <div class="panel-heading">
                          <h3>${property.title}</h3>
                          <h6>${property.location}</h6>
                      </div>
                      <div class="panel-body text-center">
                          <img src="${property.img}" class="img-responsive">
                          <h4>${property.yearBuilt} -  ${property.bedRooms}Bed, ${property.bathRooms}Baths ${property.type}</h4>
                      </div>
                      <div class="panel-footer">
                          <h5>$ ${property.price}</h5>
                      </div>
                  </div>
              </div>
              `
      }
      propertiesElem.innerHTML = template
    }
    this.showProperties = function showProperties(){
      document.getElementById('properties-section').classList.remove('hidden')
      document.getElementById('categories').classList.add('hidden')
      
      
    }
    this.hideProperties = function hideProperties(){
      document.getElementById('properties-section').classList.add('hidden')
      document.getElementById('categories').classList.remove('hidden')
     
    }
    this.addProperty = function addProperty(event) {
      event.preventDefault()
      var form = event.target
      propertiesService.addProperty(form)
      propertiesFormElem.classList.toggle('hidden', true)
      drawProperties()
    }
    var formstate = false
    
    this.showAddPropertyForm = function showAddPropertyForm() {
      if (formstate) {
        showButton.innerText = 'Add Listing'
        showButton.className = 'btn btn-info'
        propertiesFormElem.classList.add('hidden')
        formstate = false
      } else {
        showButton.innerText = 'Cancel'
        showButton.className = 'btn btn-danger'
        propertiesFormElem.classList.remove('hidden')
        formstate = true
      }
    }
  
    drawProperties()
  }