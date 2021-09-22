let carousel = document.getElementById('carousel');
let slideList = document.getElementById('slides');
let slideItem = carousel.querySelectorAll('.slide');
let slidesLength = slideItem.length;
let activeSlide = 1;

let firstItem = slideItem[0];
let lastItem = slideItem[slidesLength - 1];

firstItem.before(lastItem.cloneNode(true));
lastItem.after(firstItem.cloneNode(true));

slideList.style.left = `${-200 * activeSlide}px`;

let buttonLeft = document.getElementById('button-left');
let buttonRight = document.getElementById('button-right');

buttonLeft.addEventListener('click', () => {swipe('left')});
buttonRight.addEventListener('click', () => {swipe('right')});

function swipe(direction) {
   if (direction === 'left' && activeSlide > 0) {
     activeSlide--;
   } else if (direction === 'right' && activeSlide <= slidesLength) {
     activeSlide++;
   }
   slideList.style.left = `${-200 * activeSlide}px`;
   slideList.style.transition = 'left 0.25s';
}

slideList.addEventListener('transitionend', jump);

function jump() {
  activeSlide = (activeSlide === slidesLength + 1) ? 1 : activeSlide;
  activeSlide = (activeSlide === 0) ? slidesLength : activeSlide;
  slideList.style.transition = 'none';
  slideList.style.left = `${-200 * activeSlide}px`; 
  }


