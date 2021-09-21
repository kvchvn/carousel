let carousel = document.getElementById('slides');
let slides = carousel.querySelectorAll('.slide');
let slidesLength = slides.length;
let activeSlide = 1;

let first = slides[0];
let last = slides[slides.length - 1];

first.before(last.cloneNode(true));
last.after(first.cloneNode(true));

let buttons = document.querySelectorAll('.button');

function swipe() {
  let cycle;
  let delta;
  let slidesStyles = getComputedStyle(carousel);

  if ((!carousel.matches('.animated'))) {
    cycle = false;
    delta = (carousel.id === 'prev') ? -1 : 1;
  
    carousel.style.left += `-${200 * delta}px`;
    activeSlide += delta;

    cycle = (activeSlide === 0 || current > slidesLength);

    if (cycle) {
      activeSlide = (activeSlide === 0) ? slidesLength : 1;
      carousel.style.left = `${-200 * current}px`;
    }
  }

  
}


