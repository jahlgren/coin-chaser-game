import { Transform } from './Math/Transform.js';
import { Graphic } from './Graphics/Graphic.js';
import { Scene } from './Scene.js';

export class GameObject {
  /**
   * Creates a new GameObject instance. It might be a good idea to create subclasses of GameObject.
   * @param {Transform} transform 
   */
  constructor(transform) {
    /** @type {Transform} */
    this.transform = Transform.isTransform(transform) ? transform : new Transform();
    
    /** @type {Graphic} */
    this.graphic = null;

    /**
     * The Scene this GameObject belongs to. Will be set when using:
     * ```js
     * scene.add(gameObject);
     * ``` 
     * @type {Scene} 
     */
    this.scene = null;
  }

  /**
   * Called once when added to a scene.
   * @virtual
   */
  start() { }

  /**
   * Called once when removed from a scene.
   * @virtual
   */
  end() { }
  
  /**
   * @param {number} deltaTime 
   * @param {number} elapsedTime 
   * @virtual
   */
  update(deltaTime, elapsedTime) { }

  /** @param {CanvasRenderingContext2D} context */
  render(context) {
    if(this.graphic) {
      this.graphic.render(this.transform, context);
    }
  }
}