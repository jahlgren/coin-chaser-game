import { EasyGameEngine } from './EasyGameEngine.js';

export class Scene {
    constructor() {
        /** @type {EasyGameEngine} Will be set when the scene is added to Game. */
        this.game = null;
    }

    /**
     * Called when the scene is added to the Game.
     */
    begin() { }

    /**
     * Called when the scene is removed from the Game.
     */
    end() { }

    /**
     * Used for game logic.
     * @param {number} deltaTime Time in seconds since last frame.
     */
    update(deltaTime) { }
    
    /**
     * Used for rendering the scene.
     * @param {*} context 
     */
    render(context) { }
}