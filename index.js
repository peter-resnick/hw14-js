// Get references to the tbody element, input field and button
var tbody = document.querySelector("tbody");
var timeInput = document.querySelector("#dateTime");
var cityInput = document.querySelector("#city");
var stateInput = document.querySelector("#state");
var countryInput = document.querySelector("#country");
var shapeInput = document.querySelector("#shape");
var searchTimeBtn = document.querySelector("#searchTime");
var searchCityBtn = document.querySelector("#searchCity");
var searchStateBtn = document.querySelector("#searchState");
var searchCountryBtn = document.querySelector("#searchCountry");
var searchShapeBtn = document.querySelector("#searchShape");
var resetBtn = document.querySelector("#reset");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
searchTimeBtn.addEventListener("click", handleTimeButtonClick);
searchCityBtn.addEventListener("click", handleCityButtonClick);
searchStateBtn.addEventListener("click", handleStateButtonClick);
searchCountryBtn.addEventListener("click", handleCountryButtonClick);
searchShapeBtn.addEventListener("click", handleShapeButtonClick);
resetBtn.addEventListener("click", handleResetButtonClick);


// Set filteredAddresses to addressData initially
var filteredObservations = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  tbody.innerHTML = "";
  for (var i = 0; i < filteredObservations.length; i++) {
    // Get get the current address object and its fields
    var observation = filteredObservations[i];
    var fields = Object.keys(observation);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = observation[field];
    }
  }
}

function handleTimeButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filteredTerm = timeInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredObservations = dataSet.filter(val => {
    var observationTime = val.datetime.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return observationTime === filteredTerm;
  });
  renderTable();
  timeInput.value = ""
}

function handleCityButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filteredTerm = cityInput.value.trim().toLowerCase();
  
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredObservations = dataSet.filter(val => {
      var observationCity = val.city.toLowerCase();
  
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      return observationCity === filteredTerm;
    });

    renderTable();
    cityInput.value = ""
}

function handleStateButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filteredTerm = stateInput.value.trim().toLowerCase();
  
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredObservations = dataSet.filter(val => {
        //console.log(dataSet)
      var observationState = val.state.toLowerCase();
  
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      return observationState === filteredTerm;
    });
    renderTable();
    stateInput.value = ""
}

function handleCountryButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filteredTerm = countryInput.value.trim().toLowerCase();
  
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredObservations = dataSet.filter(val => {
      var observationCountry = val.country.toLowerCase();
  
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      return observationCountry === filteredTerm;
    });
    renderTable();
    countryInput.value = ""
}

function handleShapeButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filteredTerm = shapeInput.value.trim().toLowerCase();
  
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredObservations = dataSet.filter(val => {
      var observationShape = val.shape.toLowerCase();
  
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      return observationShape === filteredTerm;
    });
    renderTable();
    shapeInput.value = ""
}

function handleResetButtonClick() {
  filteredObservations = dataSet
  renderTable()
}
// Render the table for the first time on page load
renderTable();
