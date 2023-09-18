import { renderFood } from "./scripts/food.js";
import { renderAllEating } from "./scripts/eating.js";
import { renderDisplay } from "./scripts/display.js";
import { searchInput, handleSearchInput } from "./scripts/search.js";
import { renderStatistic } from "./scripts/statistics.js";
import { handleSelectChange } from "./scripts/select.js";

const select = document.querySelector(".popup__select");

renderFood();
renderAllEating();
renderDisplay();
renderStatistic();

searchInput.addEventListener("input", handleSearchInput);
select.addEventListener("change", () => {
  handleSelectChange(select);
});
