export class Canvas {
    /**
     * Creates a new canvas with the given width and height in pixels.
     * @param {number} width 
     * @param {number} height 
     */
    constructor(width, height) {
        this.element = document.createElement('canvas');
        this.element.classList.add('game-canvas');
        this.element.width = width;
        this.element.height = height;
        this.context = this.element.getContext('2d');
    }
}