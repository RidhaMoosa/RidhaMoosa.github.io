// Parallax Scrolling Effect
window.addEventListener("scroll", function() {
    const parallax = document.querySelector(".hero");
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
  });
  
  $(document).ready(function() {
    // Initialize Google Maps autocomplete
    var input = document.getElementById('location');
    var autocomplete = new google.maps.places.Autocomplete(input, { types: ['geocode'] });
  });
  