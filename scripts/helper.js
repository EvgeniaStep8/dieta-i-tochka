import { getEating } from "./localStorage.js";

const getAllFood = () => {
  const breakfast = getEating("breakfast");
  const lunch = getEating("lunch");
  const dinner = getEating("dinner");
  const nosh = getEating("nosh");

  return breakfast.concat(lunch, dinner, nosh);
};

const getAllCalories = () => {
  const allFood = getAllFood();

  return Math.ceil(
    allFood.reduce((prev, cur) => prev + (+cur.calories * +cur.weight) / 100, 0)
  );
};

const getEatingCalories = (eatingName) => {
  const eating = getEating(eatingName);

  return Math.ceil(
    eating.reduce((prev, cur) => prev + (+cur.calories * +cur.weight) / 100, 0)
  );
}

const getAllProteins = () => {
  const allFood = getAllFood();

  return Math.ceil(
    allFood.reduce((prev, cur) => prev + (+cur.proteins * +cur.weight) / 100, 0)
  );
};

const getAllHydrocarbons = () => {
  const allFood = getAllFood();

  return Math.ceil(
    allFood.reduce(
      (prev, cur) => prev + (+cur.hydrocarbons * +cur.weight) / 100,
      0
    )
  );
};

const getAllFats = () => {
  const allFood = getAllFood();

  return Math.ceil(
    allFood.reduce((prev, cur) => prev + (+cur.fats * +cur.weight) / 100, 0)
  );
};

export { getAllCalories, getEatingCalories, getAllProteins, getAllHydrocarbons, getAllFats };