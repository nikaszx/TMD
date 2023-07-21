window.addEventListener("load", ()=> {
  const Loader = document.querySelector(".preloader");
  Loader.classList.add("hidden");
  Loader.addEventListener("transitioned", ()=> {
    document.body.removeChild(Loader)
  })
})

const optionElements = document.querySelectorAll(".option");
const WheyBox = document.querySelector(".whey_box");
const CreatineBox = document.querySelector(".creatine_box");
const PreWorkoutBox = document.querySelector(".preWorkout_box");
const WheyTitle = document.querySelector(".whey_title");
const CreatineTitle = document.querySelector(".creatine_title");
const PreWorkoutTitle = document.querySelector(".preWorkout_title");
const WheyDef = document.querySelector(".whey_definition");
const CreatineDef = document.querySelector(".creatine_definition");
const preWorkoutDef = document.querySelector(".preWorkout_definition");

function presetAll() {
  removeActive(WheyBox);
  removeActive(CreatineBox);
  removeActive(PreWorkoutBox);
  removeActive(WheyTitle);
  removeActive(CreatineTitle);
  removeActive(PreWorkoutTitle);
  removeActive(WheyDef);
  removeActive(CreatineDef);
  removeActive(preWorkoutDef);
}

function showWhey() {
  addActive(WheyBox);
  addActive(WheyTitle);
  addActive(WheyDef);
  removeActive(CreatineBox);
  removeActive(CreatineTitle);
  removeActive(CreatineDef);
  removeActive(PreWorkoutBox);
  removeActive(PreWorkoutTitle);
  removeActive(preWorkoutDef);
}

function showCreatine() {
  addActive(CreatineBox);
  addActive(CreatineTitle);
  addActive(CreatineDef);
  removeActive(WheyBox);
  removeActive(WheyTitle);
  removeActive(WheyDef);
  removeActive(PreWorkoutBox);
  removeActive(PreWorkoutTitle);
  removeActive(preWorkoutDef);
}

function showPreWorkout() {
  addActive(PreWorkoutBox);
  addActive(PreWorkoutTitle);
  addActive(preWorkoutDef);
  removeActive(WheyBox);
  removeActive(WheyTitle);
  removeActive(WheyDef);
  removeActive(CreatineBox);
  removeActive(CreatineTitle);
  removeActive(CreatineDef);
}

// Definindo a função showWhey como predefinição
showWhey();

function addActive(element) {
  if (element) {
    element.classList.add("active");
  }
}

function removeActive(element) {
  if (element) {
    element.classList.remove("active");
  }
}

optionElements.forEach(function (element) {
  element.addEventListener("click", function () {
    const selectedValue = parseInt(this.getAttribute("value"));

    removeActive(WheyBox);
    removeActive(CreatineBox);
    removeActive(PreWorkoutBox);
    removeActive(WheyTitle);
    removeActive(CreatineTitle);
    removeActive(PreWorkoutTitle);
    removeActive(WheyDef);
    removeActive(CreatineDef);
    removeActive(preWorkoutDef);

    switch (selectedValue) {
      case 1:
        showWhey();
        break;
      case 2:
        showCreatine();
        break;
      case 3:
        showPreWorkout();
        break;
      default:
        presetAll();
        break;
    }
  });
});
