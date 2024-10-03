/**
 * Abstract class representing a building.
 */
export default class Building {
  /**
   * Creates an instance of Building.
   * @param {number} sqft - The square footage of the building.
   * @throws {Error} If the class extending Building does not override evacuationWarningMessage.
   */
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  /**
   * Gets the square footage of the building.
   * @return {number} The square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Sets the square footage of the building.
   * @param {number} value - The new square footage.
   */
  set sqft(value) {
    this._sqft = value;
  }
}
