let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let buttons = document.getElementsByClassName("slider-buttons")[0].getElementsByTagName("button");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-button");
  }
  slides[slideIndex - 1].style.opacity = "1";
  buttons[slideIndex - 1].classList.add("active-button");
}

let prevButton = document.getElementsByClassName("prev-button")[0];
let nextButton = document.getElementsByClassName("next-button")[0];
prevButton.addEventListener("click", function() {plusSlides(-1)});
nextButton.addEventListener("click", function() {plusSlides(1)});
