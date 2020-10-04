var clicks = 0;
var countryNames = document.getElementById("names");

//Shows and hides country names
function showNames() {
    
    if (countryNames.style.display === "block") {
      countryNames.style.display = "none";
    } else {
      countryNames.style.display = "block";
    }
  }

//Changes to color on 1st click
function changeColor(event) { 
    clicks++

    if (clicks == 1)  {
      event.target.style.fill = "#DA4567";
  }
    if (clicks == 2) {
        event.target.style.fill = "#7aeb34";
   }
    if (clicks == 3) {
        event.target.style.fill = "#ffe70a";
}
    if (clicks == 4) {
        event.target.style.fill = "#ba0afa";
}
    if (clicks == 5) {
        event.target.style.fill = "#FFFFFF";
        clicks = 0;
}
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}