import Building from './5-building';

/**
 * Class representing a sky-high building.
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super().sqft = sqft;
    this.floors = floors;
  }

  /**
   * Returns an evacuation warning message.
   * @return {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }

  /**
   * Gets the number of floors in the building.
   * @return {number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Sets the number of floors in the building.
   * @param {number} value - The new number of floors.
   * @throws {TypeError} If the value is not a number.
   */
  set floors(value) {
    if (typeof value === 'number') {
      this._floors = value;
    } else {
      throw new TypeError('Floors must be a number');
    }
  }
}
