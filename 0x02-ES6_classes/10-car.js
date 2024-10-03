const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    return new this.constructor();
  }

  cloneCar() {
    const cloned = this[cloneSymbol]();
    cloned._brand = this._brand;
    cloned._motor = this._motor;
    cloned._color = this._color;
    return cloned;
  }
}
