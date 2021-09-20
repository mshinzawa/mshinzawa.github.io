// Assign the modal

var modal = document.getElementById("donationModal");

// Assign the button to open the hidden donation box
var btn = document.getElementById("donation-btn");

// When user click the donate now button, it will close the modal
var span = document.getElementsByClassName("donation_close_button")[0];

// when the user click the "Make a Gift" button, open the modal
btn.onclick = function() {
  modal.style.display="block";
}

// When the user click on "donate now" button, it will close the modal.
span.onclick = function() {
  modal.style.display="/donation_thank_you.html";
}

