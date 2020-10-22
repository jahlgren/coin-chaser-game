export class Color {
  /**
   * Creates an object representing a rgba color.
   * @param {number} r Red [0 - 255]
   * @param {number} g Green [0 - 255]
   * @param {number} b Blue [0 - 255] 
   * @param {number} a Alpha [0 - 1]
   */
  constructor(r=255, g=255, b=255, a=1.0) {
    /**
     * @type {number}
     * @private
     */
    this._r = r;

    /**
     * @type {number}
     * @private
     */
    this._g = g;

    /**
     * @type {number}
     * @private
     */
    this._b = b;

    /**
     * @type {number}
     * @private
     */
    this._a = a;

    /**
     * Color as string.
     * @type {string}
     */
    this.string = '';

    this._updateString();
  }

  /**
   * Red [0 - 255]
   * @type {number}
   */
  get r() {
    return this._r;
  }
  set r(value) {
    this._r = value;
    this._updateString();
  }

  /**
   * Green [0 - 255]
   * @type {number}
   */
  get g() {
    return this._g;
  }
  set g(value) {
    this._g = value;
    this._updateString();
  }

  /**
   * Blue [0 - 255]
   * @type {number}
   */
  get b() {
    return this._b;
  }
  set b(value) {
    this._b = value;
    this._updateString();
  }

  /**
   * Alpha [0 - 1]
   * @type {number}
   */
  get a() {
    return this._a;
  }
  set a(value) {
    this._a = value;
    this._updateString();
  }

  /**
   * Set the vlaues for r, g, b, and a.
   * @param {number} r Red [0 - 255]
   * @param {number} g Green [0 - 255]
   * @param {number} b Blue [0 - 255] 
   * @param {number} a Alpha [0 - 1]
   */
  set(r, g, b, a) {
    this._r = r;
    this._g = g;
    this._b = b;
    this._a = a;
    this._updateString();
  }

  /**
   * Updates the color string.
   * @private
   */
  _updateString() {
    this.string = `rgba(${this._r},${this._g},${this._b},${this._a})`;
  }
}