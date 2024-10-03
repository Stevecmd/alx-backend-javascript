import Building from './5-building';

/**
 * Class representing a sky-high building.
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates an instance of SkyHighBuilding.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * Gets the number of floors in the building.
   * @return {number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Returns an evacuation warning message.
   * @return {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
