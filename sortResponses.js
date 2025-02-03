document.addEventListener("DOMContentLoaded", function(){
  // Select all responses in the unsorted container
  var responses = document.querySelectorAll("#unsorted-responses .response");
  responses.forEach(function(response) {
    var rating = parseInt(response.getAttribute("data-rating"), 10);
    if(rating >= 8) {
      document.getElementById("satisfactory").appendChild(response);
    } else {
      document.getElementById("unsatisfactory").appendChild(response);
    }
  });
});
