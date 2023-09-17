const getFoodInLocalStorage = () => {
  let food;
  if (localStorage.getItem("food")) {
    food = JSON.parse(localStorage.getItem("food"));
  } else {
    food = [];
  }
  return food;
};

const addFoodInLocalStorage = (product) => {
  const food = getFoodInLocalStorage();
  food.push(product);

  localStorage.setItem("food", JSON.stringify(food));
};

const getEating = (eatingName) => {
  let eating;
  if (localStorage.getItem(eatingName)) {
    eating = JSON.parse(localStorage.getItem(eatingName));
  } else {
    eating = [];
  }
  return eating;
};

const addEating = (eatingName, eatingFood) => {
  const eating = getEating(eatingName);

  eating.push(eatingFood);

  localStorage.setItem(eatingName, JSON.stringify(eating));
};

export { getFoodInLocalStorage, addFoodInLocalStorage, getEating, addEating };
