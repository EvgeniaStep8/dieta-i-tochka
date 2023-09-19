import { openPopup, closePopup } from "./popup.js";
import { changeNorm } from "./display.js";

const popup = document.querySelector("#popup-new-norm");
const form = document.forms.changeNormForm;

const handleChangeNorm = () => {
  form.reset();
  openPopup(popup);
};

const handleFormSubmit = (evt) => {
  evt.preventDefault();
  changeNorm(form.querySelector(".popup__input").value);
  closePopup(popup);
};

form.addEventListener("submit", handleFormSubmit);

export { handleChangeNorm };
