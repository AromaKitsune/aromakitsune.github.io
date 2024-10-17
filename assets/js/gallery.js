let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides_gallery");
  let dots = document.getElementsByClassName("demo_gallery");
  let captionText = document.getElementById("caption_gallery");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_gallery", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active_gallery";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
