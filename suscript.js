// Toggle visibility of additional questions based on the user's selection
document.addEventListener("DOMContentLoaded", function() {
  var consentRadios = document.querySelectorAll('input[name="consent"]');
  var additionalQuestions = document.getElementById("additional-questions");

  consentRadios.forEach(function(radio) {
    radio.addEventListener("change", function() {
      additionalQuestions.style.display = this.value === "yes" ? "block" : "none";
    });
  });
});

// Initialize Algolia Places
var placesAutocomplete = places({
  appId: '2W3ONGK46Y',
  apiKey: 'e6c59254c84d9cacd8c9a4e7f9d11d7f',
  container: document.querySelector('#location'),
  templates: {
    value: function(suggestion) {
      return suggestion.name;
    }
  }
}).configure({
  type: 'city', // Set the type of results to be cities only
  countries: ['za'] // Restrict to South Africa
});


  