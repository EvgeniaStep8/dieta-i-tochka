import { getEating } from "./localStorage.js";

const canvas = document.querySelector(".statisticks__canvas");
const context = canvas.getContext("2d");

const breakfast = getEating("breakfast");
const lunch = getEating("lunch");
const dinner = getEating("dinner");
const nosh = getEating("nosh");
const allFood = breakfast.concat(lunch, dinner, nosh);

const allCalories = Math.ceil(
  allFood.reduce((prev, cur) => prev + (+cur.calories * +cur.weight) / 100, 0)
);

const breakfestCalories = Math.ceil(
  breakfast.reduce((prev, cur) => prev + (+cur.calories * +cur.weight) / 100, 0)
);
const lunchCalories = Math.ceil(
  lunch.reduce((prev, cur) => prev + (+cur.calories * +cur.weight) / 100, 0)
);
const dinnerCalories = Math.ceil(
  dinner.reduce((prev, cur) => prev + (+cur.calories * +cur.weight) / 100, 0)
);
const noshCalories = Math.ceil(
  nosh.reduce((prev, cur) => prev + (+cur.calories * +cur.weight) / 100, 0)
);

const breakfestStart = 0;
const lunchStart = (breakfestCalories / allCalories) * 2 * Math.PI;
const dinnerStart = lunchStart + (lunchCalories / allCalories) * 2 * Math.PI;
const noshStart = dinnerStart + (dinnerCalories / allCalories) * 2 * Math.PI;

const renderSlice = (centerX, centerY, radius, startAngle, endAngle, color) => {
  context.fillStyle = color;
  context.beginPath();
  context.moveTo(centerX, centerY);
  context.arc(centerX, centerY, radius, startAngle, endAngle);
  context.closePath();
  context.fill();
};

const renderDiagram = () => {
  renderSlice(150, 150, 150, breakfestStart, lunchStart, "blue");
  renderSlice(150, 150, 150, lunchStart, dinnerStart, "orange");
  renderSlice(150, 150, 150, dinnerStart, noshStart, "green");
  renderSlice(150, 150, 150, noshStart, Math.PI * 2, "yellow");
};

export { renderDiagram };
