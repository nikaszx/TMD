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