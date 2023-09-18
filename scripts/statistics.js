import { getAllCalories, getEatingCalories } from "./helper.js";
const canvas = document.querySelector(".statistics__canvas");
const context = canvas.getContext("2d");

const breakfastInfo = document.querySelector("#statistics-breakfast");
const lunchInfo = document.querySelector("#statistics-lunch");
const dinnerInfo = document.querySelector("#statistics-dinner");
const noshInfo = document.querySelector("#statistics-nosh");

const renderSlice = (centerX, centerY, radius, startAngle, endAngle, color) => {
  context.fillStyle = color;
  context.beginPath();
  context.moveTo(centerX, centerY);
  context.arc(centerX, centerY, radius, startAngle, endAngle);
  context.closePath();
  context.fill();
};

const renderInfo = (breakfastCalories, lunchCalories, dinnerCalories, noshCalories) => {
  breakfastInfo.textContent = `${breakfastCalories} ккал`;
  lunchInfo.textContent = `${lunchCalories} ккал`;
  dinnerInfo.textContent = `${dinnerCalories} ккал`;
  noshInfo.textContent = `${noshCalories} ккал`;
}

const renderEmptyDiagram = () => {
  renderSlice(150, 150, 150, 0, 2 * Math.PI, "violet");
}

const renderDiagram = (breakfastStart, lunchStart, dinnerStart, noshStart) => {
  renderEmptyDiagram();

  renderSlice(150, 150, 150, breakfastStart, lunchStart, "blue");
  renderSlice(150, 150, 150, lunchStart, dinnerStart, "orange");
  renderSlice(150, 150, 150, dinnerStart, noshStart, "green");
  renderSlice(150, 150, 150, noshStart, Math.PI * 2, "yellow");
};

const renderStatistic = () => {
  const allCalories = getAllCalories();
  
  const breakfastCalories = getEatingCalories("breakfast");
  const lunchCalories = getEatingCalories("lunch");
  const dinnerCalories = getEatingCalories("dinner");
  const noshCalories = getEatingCalories("nosh");

  renderInfo(breakfastCalories, lunchCalories, dinnerCalories, noshCalories);
  
  const breakfastStart = 0;
  const lunchStart = (breakfastCalories / allCalories) * 2 * Math.PI;
  const dinnerStart = lunchStart + (lunchCalories / allCalories) * 2 * Math.PI;
  const noshStart = dinnerStart + (dinnerCalories / allCalories) * 2 * Math.PI;

  renderDiagram(breakfastStart, lunchStart, dinnerStart, noshStart);
}

export { renderStatistic };
