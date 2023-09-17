import { renderFood } from "./scripts/food.js";
import { renderAllEating } from "./scripts/eating.js";
import { renderDisplay } from "./scripts/display.js";
import { searchInput, handleSearchInput } from "./scripts/search.js";
import { renderDiagram } from "./scripts/statistics.js";

renderFood();
renderAllEating();
renderDisplay();

searchInput.addEventListener("input", handleSearchInput);

renderDiagram();
