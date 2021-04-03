const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');;
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another
//slides[0].style.left = slideWidth = 0 + 'p';
//slides[1].style.left = slideWidth = 1 + 'px';
//slides[2].style.left = slideWidth = 2 + 'px';
slides.forEach((slide, index) => {
    slide.style.left = slideWidth + index + 'px';
})
  
// when I click left, move slides to the left
// when I click right, move slide to the right
// when I click the nav indicators, move to that slide