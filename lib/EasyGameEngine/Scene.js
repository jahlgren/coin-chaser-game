import { EasyGameEngine } from './EasyGameEngine.js';

/** @abstract */
export class Scene {
  /**
   * Scene should not be created with **new**. You should create a subclass that extends Scene.
   */
  constructor() {
    /** 
     * The game object this scene belongs to. Will be set before `this.begin()`. The value is null in the constructor.
     * @type {EasyGameEngine}
     */
    this.game = null;
  }

  /**
   * Pixel width of the game canvas.
   * ```js
   * // Shorthand for:
   * this.game.canvas.width
   * ```
   * @returns {number}
   */
  get width() {
    return this.game.canvas.width;
  }

  /**
   * Pixel height of the game canvas.
   * ```js
   * // Shorthand for:
   * this.game.canvas.height
   * ```
   * @returns {number}
   */
  get height() {
    return this.game.canvas.height;
  }

  /**
   * Called when the scene is added to the game.
   * @virtual
   */
  begin() { }

  /**
   * Called when the scene is removed from the game.
   * @virtual
   */
  end() { }

  /**
   * Used for game logic.
   * @param {number} deltaTime Time in seconds since last frame.
   * @param {number} elapsedTime Elapsed time since the game was started.
   * @virtual
   */
  update(deltaTime, elapsedTime) { }

  /**
   * Used for rendering the scene.
   * @param {CanvasRenderingContext2D} context 
   * @virtual
   */
  render(context) { }
}