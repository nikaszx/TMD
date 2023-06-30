// Loader

window.addEventListener("load", ()=> {
  const Loader = document.querySelector(".preloader");
  Loader.classList.add("hidden");
  Loader.addEventListener("transitioned", ()=> {
    document.body.removeChild(Loader)
  })
})


// Carousel

let sliderList = document.querySelector('.slider-home .list-img');
let items = document.querySelectorAll('.slider-home .list-img .item');
let dots = document.querySelectorAll('.slider-home .ul-dots li');
let active = 0;

function reloadSlider() {
  items.forEach((item, index) => {
    if (index === active) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === active) {
      dot.classList.add('active');
    }
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', function () {
    active = index;
    reloadSlider();
  });
});

reloadSlider();