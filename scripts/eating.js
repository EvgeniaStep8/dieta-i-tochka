import { getEating } from "./localStorage.js";
import { handleAddClick } from "./foodForm.js";
import { renderStatistic } from "./statistics.js";

const createFoodCard = ({ name, calories, weight }) => {
  const foodCard = document
    .querySelector("#food-card-template")
    .content.querySelector(".food-card")
    .cloneNode(true);

  foodCard.querySelector(".food-card__name").textContent = name;
  foodCard.querySelector(".food-card__calories").textContent = `${Math.ceil(
    (+calories * +weight) / 100
  )} ккал`;
  foodCard.querySelector(".food-card__weight").textContent = `${+weight} г`;

  return foodCard;
};

const addFoodCard = (food, container) => {
  const foodCard = createFoodCard(food);
  container.append(foodCard);
};

const renderEating = (card) => {
  const eatingName = card.id.replace("#", "");
  const eatingFood = getEating(eatingName);

  const addButton = card.querySelector(".card__add-button");
  addButton.addEventListener("click", () => {
    handleAddClick(eatingName);
  });

  if (eatingFood.length > 0) {
    const display = card.querySelector(".card__display");
    const cardFood = card.querySelector(".card__food");
    const cardButton = display.querySelector(".card__button");

    cardFood.innerHTML = "";

    if (!display.classList.contains("card__display_visible")) {
      display.classList.add("card__display_visible");

      cardButton.addEventListener("click", () => {
        cardFood.classList.toggle("card__food_visible");
        cardButton.classList.toggle("card__button_active");
      });
    }

    const calories = Math.ceil(
      eatingFood.reduce(
        (prev, cur) => prev + (+cur.calories * +cur.weight) / 100,
        0
      )
    );

    card.querySelector(".card__calories").textContent = `${calories} ккал`;
    card.querySelector(".card__precent").textContent = `${Math.ceil(
      (calories / 1800) * 100
    )} %`;

    eatingFood.forEach((food) => addFoodCard(food, cardFood));
  }
};

const renderAllEating = () => {
  document.querySelectorAll(".card").forEach((card) => renderEating(card));

  renderStatistic();
};

export { renderAllEating };
