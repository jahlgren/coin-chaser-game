import { GameObject } from "../../../vendor/EasyGameEngine/GameObject.js";
import { CircleShape } from "../../../vendor/EasyGameEngine/Graphics/CircleShape.js";
import { Vector2d } from "../../../vendor/EasyGameEngine/Geom/Vector2d.js";
import { Colors } from "../../../vendor/EasyGameEngine/Graphics/Color.js";
import { Circle } from "../../../vendor/EasyGameEngine/Geom/Circle.js";

export class ChaseEnemy extends GameObject {

  constructor(x, y, speed, target) {
    super(x, y);
    
    this.target = target;

    this.acceleration = speed;
    this.drag = 1.5;
    this.velocity = new Vector2d();

    this.body = new Circle(0, 0, 30);
    this.body.position = this.transform.position;

    this.graphic = new CircleShape(this.body.radius, Colors.red());

    this._moveDirection = new Vector2d();
  }

  update(deltaTime, elapsedTime) {
    this._updateMovementDirection();
    this._handleVelocity(deltaTime);
  }

  _updateMovementDirection() {
    this._moveDirection.set(
      (this.target.transform.position.x + this.target.velocity.x) - this.transform.position.x, 
      (this.target.transform.position.y + this.target.velocity.y) - this.transform.position.y
    );

    if((this._moveDirection.x || this._moveDirection.y) !== 0) {
      this._moveDirection.normalize();
    }
  }

  _handleVelocity(deltaTime) {
    this.velocity.add(this._moveDirection.multiply(this.acceleration * deltaTime));
    this.transform.position.x += this.velocity.x * deltaTime;
    this.transform.position.y += this.velocity.y * deltaTime;
    this.velocity.multiply(Math.max(1 - deltaTime * this.drag, 0));
  }
}