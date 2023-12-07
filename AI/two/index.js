// Get the button and the count elements
const likeButton = document.getElementById("like-button");
const likeCount = document.getElementById("like-count");

// Initialize a variable to store the number of likes
let likes = 0;

// Add a click event listener to the button
likeButton.addEventListener("click", function() {
  // Increment the likes by one
  likes++;

  // Update the count element with the new value
  likeCount.textContent = likes;

  // Toggle the class of the button to change the icon
  likeButton.classList.toggle("liked");
});
