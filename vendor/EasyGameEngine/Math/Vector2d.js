export class Vector2d {
  /**
   * Create an object that holds an x and y value.
   * @param {number} x 
   * @param {number} y 
   */
  constructor(x, y) {
    /** @type {number} */
    this.x = x || 0;

    /** @type {number} */
    this.y = y || 0;
  }

  /**
   * Returns true if the given argument is a Vector2d object.
   * @param {any} obj
   * @returns {boolean} 
   */
  static isVector2d(obj) {
    return obj instanceof this;
  }
}