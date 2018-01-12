// Portfolio section funcitonality

// Find items used for Portfolio thumbnails
var buttons = document.getElementsByClassName("popup-link");
var buttonsLength = buttons.length;

// Use a for loop to find the id of each portfolio item
for (i = 0; i < buttonsLength; i++) {
  var buttonClicked = document.getElementById('this' + i.toString());
  // console.log("myPopup" + i.toString());
  
  // Add an event listener to determine which Portfolio item has been clicked
  buttonClicked.addEventListener("click", function() {
    // console.log(this.id);
    var r = this.children[1];
    // console.log(r.id);
    var popup = document.getElementById(r.id);
    popup.classList.toggle("show");
  });
} 

// End Portfolio Section 