import { renderFood } from "./scripts/food.js";
import { renderAllEating } from "./scripts/eating.js";
import { renderDisplay } from "./scripts/display.js";

const radioContainer = document.querySelector(".popup__radio-form");

renderFood(radioContainer);
renderAllEating();
renderDisplay();
