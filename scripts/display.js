import { getEating } from "./localStorage.js";

const calories = document.querySelector("#callories");
const hydrocarbons = document.querySelector("#hydrocarbons");
const proteins = document.querySelector("#proteins");
const fats = document.querySelector("#fats");

const renderDisplay = () => {
  const breakfast = getEating("breakfast");
  const lunch = getEating("lunch");
  const dinner = getEating("dinner");
  const nosh = getEating("nosh");

  const allFood = breakfast.concat(lunch, dinner, nosh);

  calories.textContent = Math.ceil(
    allFood.reduce((prev, cur) => prev + (+cur.calories * +cur.weight) / 100, 0)
  );

  proteins.textContent = Math.ceil(
    allFood.reduce((prev, cur) => prev + (+cur.proteins * +cur.weight) / 100, 0)
  );

  hydrocarbons.textContent = Math.ceil(
    allFood.reduce(
      (prev, cur) => prev + (+cur.hydrocarbons * +cur.weight) / 100,
      0
    )
  );

  fats.textContent = Math.ceil(
    allFood.reduce((prev, cur) => prev + (+cur.fats * +cur.weight) / 100, 0)
  );
};

export { renderDisplay };
