import { openPopup, closePopup } from "./popup.js";
import { getFoodInLocalStorage, addEating } from "./localStorage.js";
import { renderAllEating } from "./eating.js";
import { renderDisplay } from "./display.js";
import { handleAddNewFood } from "./newFoodForm.js";

const form = document.forms.addForm;
const popup = document.querySelector("#popup-add-food");
const addNewFoodButton = document.querySelector(".popup__new-food");

let eating;

const handleAddClick = (eatingName) => {
  openPopup(popup);
  eating = eatingName;
  form.reset();
};

const handleFormSubmit = (evt) => {
  evt.preventDefault();

  const foodId = form.elements["food"].value;

  const food = getFoodInLocalStorage();
  const eatingFood = food.find((item) => item.id === +foodId);

  const weight = +form.querySelector("#weight-input").value;

  addEating(eating, { ...eatingFood, weight: weight });
  renderAllEating();
  renderDisplay();

  closePopup(popup);
};

form.addEventListener("submit", handleFormSubmit);
addNewFoodButton.addEventListener("click", () => {
  handleAddNewFood(popup);
});

export { handleAddClick };
