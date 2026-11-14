
// FIELD EXPERIENCE PHOTO SLIDESHOW

// Select all photographs in the gallery
const photos = document.querySelectorAll(".gallery figure");

// Select the Previous and Next buttons
const nextButton = document.getElementById("next-photo");
const prevButton = document.getElementById("prev-photo");

// Track the currently displayed photograph
let currentPhoto = 0;

// Function to display a selected photograph
function showPhoto(index) {
    if (photos.length === 0) return;

    photos.forEach(function(photo) {
        photo.classList.remove("active");
    });

    photos[index].classList.add("active");
}

// Initialise the slideshow
if (photos.length > 0 && nextButton && prevButton) {

    // Display the first photograph
    showPhoto(currentPhoto);

    // Move to the next photograph
    nextButton.addEventListener("click", function() {
        currentPhoto = (currentPhoto + 1) % photos.length;
        showPhoto(currentPhoto);
    });

    // Move to the previous photograph
    prevButton.addEventListener("click", function() {
        currentPhoto = (currentPhoto - 1 + photos.length) % photos.length;
        showPhoto(currentPhoto);
    });

    // Automatically change photographs every 4 seconds
    setInterval(function() {
        currentPhoto = (currentPhoto + 1) % photos.length;
        showPhoto(currentPhoto);
    }, 4000);
}
