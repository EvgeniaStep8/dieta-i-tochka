import { getFoodInLocalStorage } from "./localStorage.js";

let food = getFoodInLocalStorage();

const renderFood = (foodContainer) => {
  food.forEach((food) => {
    addFoodCard(food, foodContainer);
  });
};

const createFoodCard = ({ name, calories, id }) => {
  const foodCard = document
    .querySelector("#food-template")
    .content.querySelector(".popup__label")
    .cloneNode(true);

  foodCard.querySelector(".popup__food").textContent = name;
  foodCard.querySelector(
    ".popup__calories"
  ).textContent = `${calories} ккал / 100 г`;

  foodCard.querySelector(".popup__radio").value = id;

  return foodCard;
};

const addFoodCard = (food, container) => {
  const foodCard = createFoodCard(food);
  container.append(foodCard);
};

export { renderFood };
