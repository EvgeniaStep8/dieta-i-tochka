import { getAllCalories, getEatingCalories } from "./helper.js";
const canvas = document.querySelector(".statisticks__canvas");
const context = canvas.getContext("2d");

const renderSlice = (centerX, centerY, radius, startAngle, endAngle, color) => {
  context.fillStyle = color;
  context.beginPath();
  context.moveTo(centerX, centerY);
  context.arc(centerX, centerY, radius, startAngle, endAngle);
  context.closePath();
  context.fill();
};

const renderEmptyDiagram = () => {
  renderSlice(150, 150, 150, 0, 2 * Math.PI, "violet");
}

const renderDiagram = () => {
  const allCalories = getAllCalories();
  
  const breakfestCalories = getEatingCalories("breakfast");
  const lunchCalories = getEatingCalories("lunch");
  const dinnerCalories = getEatingCalories("dinner");
  
  const breakfestStart = 0;
  const lunchStart = (breakfestCalories / allCalories) * 2 * Math.PI;
  const dinnerStart = lunchStart + (lunchCalories / allCalories) * 2 * Math.PI;
  const noshStart = dinnerStart + (dinnerCalories / allCalories) * 2 * Math.PI;

  renderEmptyDiagram();

  renderSlice(150, 150, 150, breakfestStart, lunchStart, "blue");
  renderSlice(150, 150, 150, lunchStart, dinnerStart, "orange");
  renderSlice(150, 150, 150, dinnerStart, noshStart, "green");
  renderSlice(150, 150, 150, noshStart, Math.PI * 2, "yellow");
};

export { renderDiagram };
