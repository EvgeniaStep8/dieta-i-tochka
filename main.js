import { renderFood } from "./scripts/food.js";
import { renderAllEating } from "./scripts/eating.js";
import { renderDisplay } from "./scripts/display.js";
import { searchInput, handleSearchInput } from "./scripts/search.js";
import { renderStatistic } from "./scripts/statistics.js";

renderFood();
renderAllEating();
renderDisplay();
renderStatistic();

searchInput.addEventListener("input", handleSearchInput);
