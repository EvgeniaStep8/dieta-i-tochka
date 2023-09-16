export default class IngestionCard {
  constructor(ingestionSelector, handleAddFood) {
    this._ingestion = document.querySelector(ingestionSelector);
    this._addButton = this._ingestion.querySelector(".card__add-button");
    this.__callories = this._ingestion.querySelector(".card__calories");
    this._precent = this._ingestion.querySelector(".card__precent");

    this._handleAddFood = handleAddFood;
  }

  setEventListeners() {
    this._addButton.addEvenListener("click", () => {
      this._handleAddFood(this._ingestion);
    });
  }
}
