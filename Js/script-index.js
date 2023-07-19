// Loader

window.addEventListener("load", ()=> {
  const Loader = document.querySelector(".preloader");
  Loader.classList.add("hidden");
  Loader.addEventListener("transitioned", ()=> {
    document.body.removeChild(Loader)
  })
})


// Carousel

const sliderList = document.querySelector('.slider-home .list-img');
const items = document.querySelectorAll('.slider-home .list-img .item');
const dots = document.querySelectorAll('.slider-home .ul-dots li');
let active = 0;
let slideInterval;

function reloadSlider() {
  const offset = -100 * active; // Determine o valor de deslocamento com base no slide ativo
  sliderList.style.transform = `translateX(${offset}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === active);
  });
}

function nextSlide() {
  active = (active + 1) % items.length;
  reloadSlider();
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', function () {
    active = index;
    reloadSlider();
    stopSlideShow();
  });
});

sliderList.addEventListener('mouseenter', stopSlideShow);
sliderList.addEventListener('mouseleave', startSlideShow);

startSlideShow();