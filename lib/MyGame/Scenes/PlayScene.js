import { Scene } from '../../EasyGameEngine/Scene.js';
import { CircleShape } from '../../EasyGameEngine/Graphics/CircleShape.js';
import { Vector2d } from '../../EasyGameEngine/Geom/Vector2d.js';

export class PlayScene extends Scene {

  constructor() {
    super();
    this.circleShape = new CircleShape(300, 240, 100, null);
    this.circleShape.setBorder('yellow', 10);
  }

  /**
   * @param {number} deltaTime 
   * @param {number} elapsedTime 
   */
  update(deltaTime, elapsedTime) {
    
  }

  /** @param {CanvasRenderingContext2D} context */
  render(context) {
    this.circleShape.render(context);
  }
}