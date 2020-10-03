var clicks = 0;
var countryNames = document.getElementById("hide");

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

    if (clicks == 1) {
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