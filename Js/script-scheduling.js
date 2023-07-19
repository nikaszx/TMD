window.addEventListener("load", ()=> {
    const Loader = document.querySelector(".preloader");
    Loader.classList.add("hidden");
    Loader.addEventListener("transitioned", ()=> {
      document.body.removeChild(Loader)
    })
  })

// Label animation
const inputs = document.querySelectorAll(".field");

inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if(inp.value != "") return;
        inp.classList.remove("active");
    });
});

const date_inputs = document.querySelector(".date-field");

date_inputs.addEventListener("focus", () => {
    date_inputs.classList.toggle('active');
})

// Obrigatoriedade nos campos

const fields = document.querySelectorAll('.field');
const dateField = document.querySelector('.date-field');
const scheduleButton = document.querySelector('.schedule-button');

function checkFields() {
  let allFieldsFilled = true;
  fields.forEach(function(field) {
    if (field.value === "") {
      allFieldsFilled = false;
    }
  });

  if (allFieldsFilled && dateField.value !== "") {
    scheduleButton.classList.add("active");
  } else {
    scheduleButton.classList.remove("active");
  }
}

fields.forEach(function(field) {
  field.addEventListener("input", checkFields);
});

dateField.addEventListener("input", checkFields);

// Open Popup
scheduleButton.addEventListener("click", function() {
  if (scheduleButton.classList.contains("active")) {
    const popup = document.querySelector(".popup-confirm");
    const body = document.querySelector("body");
    if (popup) {
      popup.classList.add("active");
      body.classList.add("active-popup")
    }
  }
});

// Close Popup
const close = document.querySelector(".denied-button");
const popup = document.querySelector(".popup-confirm");
const body = document.querySelector("body");
close.addEventListener("click", function() {
  if (popup) {
    popup.classList.remove("active");
    body.classList.remove("active-popup");
  }
});


// Active check
const check = document.querySelector(".popup-check");
const denied = document.querySelector(".denied-button");
const confirm = document.querySelector(".confirm-button");
check.addEventListener("click", function() {
    if (check.classList.contains("active")) {
      check.classList.remove("active");
      denied.classList.remove("active");
      confirm.classList.remove("active");
    } else {
      check.classList.add("active");
      denied.classList.add("active");
      confirm.classList.add("active");
    }
});