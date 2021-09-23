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
  modal.style.display="none";
  location.href= 'donation_thank_you.html';
}

// images will show while scroll
const observer = new IntersectionObserver(entries => {
  // We will fill in the callback later...
console.log(entries)
  
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('container-image-animation');
      entry.target.classList.remove('container-image-start');
    }
  });

  
});

// Tell the observer all images to show
const imageList = document.querySelectorAll('.container-image-start');
imageList.forEach((el) => {
  observer.observe(el);
})