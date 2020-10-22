import { GameObject } from "../../../vendor/EasyGameEngine/GameObject.js";

export class Player extends GameObject {
  update(dt, elapsed) {
    console.log(dt, elapsed);
  }
}