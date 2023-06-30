window.addEventListener("load", ()=> {
  const Loader = document.querySelector(".preloader");
  Loader.classList.add("hidden");
  Loader.addEventListener("transitioned", ()=> {
    document.body.removeChild(Loader)
  })
})

// Popup

const body = document.querySelector("body");
const popup1 = document.querySelector(".popup-modality1");
const popup2 = document.querySelector(".popup-modality2");
const popup3 = document.querySelector(".popup-modality3");
const popup4 = document.querySelector(".popup-modality4");

document.querySelectorAll('.read_more').forEach(function(button) {
  button.addEventListener("click", function (event) {
    const value = event.target.getAttribute('value');

    switch (value) {
      case '1':
        popup1.classList.add("active");
        body.classList.add("active-popup");
        break;
      case '2':
        popup2.classList.add("active");
        body.classList.add("active-popup")
        break;
      case '3':
        popup3.classList.add("active");
        body.classList.add("active-popup")
        break;
      case '4':
        popup4.classList.add("active");
        body.classList.add("active-popup")
        break;
        
      default:
        
        break;
    }
  });
});

document.querySelectorAll('.remove').forEach(function(i) {
  i.addEventListener("click", function(event) {
    const value = event.target.getAttribute('value');
  
    switch (value) {
      case '1':
        popup1.classList.remove("active");
        body.classList.remove("active-popup");
        break;
      case '2':
        popup2.classList.remove("active");
        body.classList.remove("active-popup");
        break;
      case '3':
        popup3.classList.remove("active");
        body.classList.remove("active-popup");
        break;
      case '4':
        popup4.classList.remove("active");
        body.classList.remove("active-popup");
        break;
      default:
        break;
    }

    const activePopup1 = document.querySelector('.popup-modality1.active');
    const activePopup2 = document.querySelector('.popup-modality2.active');
    const activePopup3 = document.querySelector('.popup-modality3.active');
    const activePopup4 = document.querySelector('.popup-modality4.active');
    if (activePopup1) {
      activePopup1.classList.remove("active");
      body.classList.remove("active-popup");
    }
    if (activePopup2) {
      activePopup2.classList.remove("active");
      body.classList.remove("active-popup");
    }
    if (activePopup3) {
      activePopup3.classList.remove("active");
      body.classList.remove("active-popup");
    }
    if (activePopup4) {
      activePopup4.classList.remove("active");
      body.classList.remove("active-popup");
    }
  });
});
