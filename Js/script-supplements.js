window.addEventListener("load", ()=> {
  const Loader = document.querySelector(".preloader");
  Loader.classList.add("hidden");
  Loader.addEventListener("transitioned", ()=> {
    document.body.removeChild(Loader)
  })
})

const optionElements = document.querySelectorAll(".option");
const AllTitle = document.querySelector(".all_result");
const WheyBox = document.querySelector(".whey_box");
const CreatineBox = document.querySelector(".creatine_box");
const PreWorkoutBox = document.querySelector(".preWorkout_box");
const WheyTitle = document.querySelector(".whey_title");
const CreatineTitle = document.querySelector(".creatine_title");
const PreWorkoutTitle = document.querySelector(".preWorkout_title");

function presetAll() {
  addActive(AllTitle);
  addActive(WheyBox);
  addActive(CreatineBox);
  addActive(PreWorkoutBox);
  removeActive(WheyTitle);
  removeActive(CreatineTitle);
  removeActive(PreWorkoutTitle);
}

function showWhey() {
  addActive(WheyBox);
  addActive(WheyTitle);
  removeActive(CreatineBox);
  removeActive(CreatineTitle);
  removeActive(PreWorkoutBox);
  removeActive(PreWorkoutTitle);
}

function showCreatine() {
  addActive(CreatineBox);
  addActive(CreatineTitle);
  removeActive(WheyBox);
  removeActive(WheyTitle);
  removeActive(PreWorkoutBox);
  removeActive(PreWorkoutTitle);
}

function showPreWorkout() {
  addActive(PreWorkoutBox);
  addActive(PreWorkoutTitle);
  removeActive(WheyBox);
  removeActive(WheyTitle);
  removeActive(CreatineBox);
  removeActive(CreatineTitle);
}

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

presetAll();

optionElements.forEach(function(element) {
  element.addEventListener("click", function() {
    const selectedValue = parseInt(this.getAttribute("value"));

    removeActive(AllTitle);
    removeActive(WheyBox);
    removeActive(CreatineBox);
    removeActive(PreWorkoutBox);

    switch (selectedValue) {
      case 1:
        presetAll();
        break;
      case 2:
        showWhey();
        break;
      case 3:
        showCreatine();
        break;
      case 4:
        showPreWorkout();
        break;
      default:
        presetAll();
        break;
    }
  });
});