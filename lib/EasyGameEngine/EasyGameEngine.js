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
        
        /** @type {Scene} */
        this.scene = scene;

        /** @type {number} The maximum allowed deltaTime incase of lag spikes. */
        this.maxDeltaTime = 0.1;

        this._previousTime = 0;
        this._gameLoop = this._gameLoop.bind(this);
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
        this.scene.begin();
    }
    
    _gameLoop(time) {
        const deltaTime = Math.min((this._previousTime - time) / 1000.0, this.maxDeltaTime);
        this._previousTime = time;

        if(this.scene) {
            this.scene.update(deltaTime);
            this.scene.render(this.canvas.context);
        }
        
        requestAnimationFrame(this._gameLoop);
    }
}