import { updateFood, food } from "./food.js";

const searchInput = document.querySelector(".popup__search");
let newFood;

const handleSearchInput = () => {
  console.log("change");
  if (searchInput.value === "") {
    newFood = food;
  } else {
    newFood = food.filter((foodItem) =>
      foodItem.name.includes(searchInput.value)
    );
  }

  updateFood(newFood);
};

export { searchInput, handleSearchInput };
