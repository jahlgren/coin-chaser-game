import { Scene } from "../../../vendor/EasyGameEngine/Scene.js";
import { Player } from './../Entities/Player.js';

export class PlayScene extends Scene {
  constructor() {
    super();
    this.add(new Player());
  }
}