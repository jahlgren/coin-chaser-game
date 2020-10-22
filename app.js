import { EasyGameEngine } from './vendor/EasyGameEngine/EasyGameEngine.js';
import { PlayScene } from './lib/MyGame/Scenes/PlayScene.js';

const startScene = new PlayScene();

const game = new EasyGameEngine(600, 480, startScene);
document.body.appendChild(game.canvas.element);
