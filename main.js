import { renderFood } from "./scripts/food.js";
import { renderAllEating } from "./scripts/eating.js";
import { renderDisplay } from "./scripts/display.js";
import { searchInput, handleSearchInput } from "./scripts/search.js";

renderFood();
renderAllEating();
renderDisplay();

searchInput.addEventListener("input", handleSearchInput);
