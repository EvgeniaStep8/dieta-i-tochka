import {
  getAllCalories,
  getAllProteins,
  getAllHydrocarbons,
  getAllFats,
} from "./helper.js";

import {
  changeCaloriesNormInLocalStorage,
  getCaloriesNormFromLocalStorage,
} from "./localStorage.js";
import { handleChangeNorm } from "./normCaloriesForm.js";

const calories = document.querySelector("#callories");
const hydrocarbons = document.querySelector("#hydrocarbons");
const proteins = document.querySelector("#proteins");
const fats = document.querySelector("#fats");
const norm = document.querySelector("#norm");
const changeNormButton = document.querySelector(".info__change-norm");
let normCalories = getCaloriesNormFromLocalStorage();

const renderNorm = () => {
  norm.textContent = `${normCalories} ккал`;
};

const changeNorm = (newNorm) => {
  normCalories = newNorm;
  changeCaloriesNormInLocalStorage(newNorm);
  renderNorm();
};

const getNormCalories = () => {
  return normCalories;
};

const renderDisplay = () => {
  calories.textContent = getAllCalories();
  proteins.textContent = getAllProteins();
  hydrocarbons.textContent = getAllHydrocarbons();
  fats.textContent = getAllFats();
};

renderNorm();

changeNormButton.addEventListener("click", handleChangeNorm);

export { renderDisplay, changeNorm, getNormCalories };
