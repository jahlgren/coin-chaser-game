import { GameObject } from "../../../vendor/EasyGameEngine/GameObject.js";
import { CircleShape } from "../../../vendor/EasyGameEngine/Graphics/CircleShape.js";
import { Colors} from '../../../vendor/EasyGameEngine/Graphics/Color.js';
import { Circle } from "../../../vendor/EasyGameEngine/Geom/Circle.js";

export class Coin extends GameObject {

  constructor(x, y) {
    super(x, y);
    
    this.body = new Circle(0, 0, 15);
    this.body.position = this.transform.position;

    this.graphic = new CircleShape(this.body.radius - 4, Colors.gold());
    this.graphic.setBorder(4, Colors.orange());
  }
}