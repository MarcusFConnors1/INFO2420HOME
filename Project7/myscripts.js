// Preload images (from Project 6 idea)
function preloadImages() {
  var images = [
    "Images/full1.jpg",
    "Images/full2.jpg",
    "Images/full3.jpg"
  ];

  for (var i = 0; i < images.length; i++) {
    var img = new Image();
    img.src = images[i];
  }
}

// Image swap function
function swapImage(newImage) {
  document.getElementById("mainImage").src = newImage;
}// JavaScript Document