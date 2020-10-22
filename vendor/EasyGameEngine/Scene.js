import { EasyGameEngine } from './EasyGameEngine.js';
import { GameObject } from './GameObject.js';

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

    /**
     * Array for holding GameObject children.
     * @type {gameObject[]}
     */
    this.children = [];
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
   * Adds a GameObject to the scene.
   * @param {GameObject} child 
   */
  add(child) {
    if(child.scene !== null) {
      throw new Error("The child has already been added to a scene.");
    }
    this.children.push(child);
    child.start();
  }

  /**
   * Removes a GameObject from the scene.
   * @param {GameObject} child 
   */
  remove(child) {
    if(child.scene !== this) {
      throw new Error("The child does not belong to this scene.");
    }
    this.children.splice(this.children.indexOf(child), 1);
    child.end();
  }

  /**
   * Called once when the scene is added to the game.
   * @virtual
   */
  start() { }

  /**
   * Called when the scene is removed from the game.
   * @virtual
   */
  end() { }

  /**
   * Used for game logic.
   * @param {number} deltaTime Time in seconds since last frame.
   * @param {number} elapsedTime Elapsed time since the game was started.
   */
  update(deltaTime, elapsedTime) {
    for(let i = 0; i < this.children.length; i++) {
      this.children[i].update(deltaTime, elapsedTime);
    }
  }

  /**
   * Used for rendering the scene.
   * @param {CanvasRenderingContext2D} context 
   */
  render(context) { }
}