import { Canvas } from "./Canvas.js"; 
import { Scene } from './Scene.js';

export class EasyGameEngine {
  /**
   * Creates a new Game object that manages scenes.
   * @param {number} width Width of the game canvas.
   * @param {number} height Height of the game canvas.
   * @param {Scene} scene Scene to start with.
   */
  constructor(width, height, scene) {
    /** @type {Canvas} */
    this.canvas = new Canvas(width, height);

    /** 
     * Active scene of the game.
     * @type {Scene}
     * ```js
     * // Use setScene if you want to change the scene.
     * game.setScene(nextScene);
     * ```
     */
    this.scene;

    /**
     * The maximum allowed deltaTime incase of lag spikes. 
     * @type {number} 
     */
    this.maxDeltaTime = 0.1;

    /**
     * Used to calculate frame deltaTime. **Don't touch this!** 
     * @type {number} 
     * @private
     */
    this._previousTime = 0;

    // We need to bind this to the _gameLoop function because
    // the reference to this is lost when using requestAnimationFrame.
    this._gameLoop = this._gameLoop.bind(this);

    // Set starting scene.
    this.setScene(scene);

    // Start the game loop.
    requestAnimationFrame(this._gameLoop);
  }

  /**
   * Set active scene.
   * @param {Scene} scene 
   */
  setScene(scene) {
    if(scene.game !== null) {
      throw new Error("The given scene has already been added to a Game.");
    }
    if(this.scene) {
      this.scene.end();
      this.scene.game = null;
    }
    this.scene = scene;
    this.scene.game = this;
    this.scene.start();
  }

  /**
   * Main loop of the game. **Don't call this!**
   * @param {number} elapsedTime Elapsed time since the game was started.
   * @private
   */
  _gameLoop(elapsedTime) {
    const deltaTime = Math.min((elapsedTime - this._previousTime) / 1000.0, this.maxDeltaTime);
    this._previousTime = elapsedTime;

    this.canvas.clear();

    if(this.scene) {
      this.scene.update(deltaTime, elapsedTime);
      this.scene.render(this.canvas.context);
    }

    requestAnimationFrame(this._gameLoop);
  }
}