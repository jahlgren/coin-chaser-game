import { Vector2d } from "../Geom/Vector2d.js";

/** @abstract */
export class Shape {
  /**
   * The Shape is a base class for other shapes and should not be created directly with **new**.
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    /** @type {Vector2d} */
    this.position = new Vector2d(x, y);
  }

  /**
   * Render the shape onto the canvas.
   * @param {CanvasRenderingContext2D} context 
   * @abstract
   */
  render(context) {
    throw new Error('Must be implemented by subclass!');
  }
}