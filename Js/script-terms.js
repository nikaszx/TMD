// Loader

window.addEventListener("load", ()=> {
    const Loader = document.querySelector(".preloader");
    Loader.classList.add("hidden");
    Loader.addEventListener("transitioned", ()=> {
      document.body.removeChild(Loader)
  });
});

// Menu select

const optionElements = document.querySelectorAll(".option");
const presetTitle = document.querySelector(".preset-title");
const privacyBox = document.querySelector(".privacy-box");
const guidelinesBox = document.querySelector(".guidelines-box");

function privacy() {
  privacyBox.classList.add("active");
  guidelinesBox.classList.remove("active");
}

function guidelines() {
  privacyBox.classList.remove("active");
  guidelinesBox.classList.add("active");
}

function preset() {
  privacyBox.classList.remove("active");
  guidelinesBox.classList.remove("active");
}

optionElements.forEach(function(optionElement) {
  optionElement.addEventListener("click", function() {
    const selectedValue = optionElement.getAttribute("value");

    presetTitle.classList.remove("active");

    switch (selectedValue) {
      case "1":
        privacy();
        break;
      case "2":
        guidelines();
        break;
      default:
        preset();
        break;
    }
  });
});