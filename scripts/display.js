import {
  getAllCalories,
  getAllProteins,
  getAllHydrocarbons,
  getAllFats,
} from "./helper.js";

const calories = document.querySelector("#callories");
const hydrocarbons = document.querySelector("#hydrocarbons");
const proteins = document.querySelector("#proteins");
const fats = document.querySelector("#fats");

const renderDisplay = () => {
  calories.textContent = getAllCalories();
  proteins.textContent = getAllProteins();
  hydrocarbons.textContent = getAllHydrocarbons();
  fats.textContent = getAllFats();
};

export { renderDisplay };
