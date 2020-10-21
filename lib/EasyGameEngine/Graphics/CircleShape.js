import { Vector2d } from "../Geom/Vector2d.js";
import { Shape } from "./Shape.js";

export class CircleShape extends Shape {
  /**
   * Creates a new circle shape that can be rendered on a canvas.
   * ```js
   * const circleShape = new CircleShape(400, 300, 50, 'red');
   * ```
   * @param {number} x
   * @param {number} y
   * @param {number} radius
   * @param {string} color
   */
  constructor(x, y, radius = 50, color = 'black') {
    super(x, y);

    /** @type {number} */
    this.radius = radius;
    
    /** @type {string} */
    this.color = color;

    /** @type {string} */
    this.borderColor = 'red';

    /** @type {number} */
    this.borderWidth = 1;
  }

  setBorder(color, width) {
    this.borderColor = color;
    this.borderWidth = width;
  }

  /**
   * Render the circle onto the canvas.
   * @param {CanvasRenderingContext2D} context 
   */
  render(context) {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    context.closePath();

    if(this.color) {
      context.fillStyle = this.color;
      context.fill();
      console.log('fill');
    }

    if(this.borderColor && this.borderWidth !== 0) {
      context.strokeStyle = this.borderColor;
      context.lineWidth = this.borderWidth;
      context.stroke();
    }
  }
}