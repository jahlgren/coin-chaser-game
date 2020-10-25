import { GameObject } from "../../../vendor/EasyGameEngine/GameObject.js";
import { CircleShape } from "../../../vendor/EasyGameEngine/Graphics/CircleShape.js";
import { Vector2d } from "../../../vendor/EasyGameEngine/Geom/Vector2d.js";
import { Colors } from "../../../vendor/EasyGameEngine/Graphics/Color.js";
import { Circle } from "../../../vendor/EasyGameEngine/Geom/Circle.js";
import { randomInt, randomFloat } from "../../../vendor/EasyGameEngine/Utils/MathUtils.js";

export class WanderEnemy extends GameObject {

  constructor(x, y, speed) {
    super(x, y);

    this.acceleration = speed;
    this.drag = 2;
    this.velocity = new Vector2d();
    this.target = new Vector2d();

    this.body = new Circle(0, 0, 30);
    this.body.position = this.transform.position;

    this.graphic = new CircleShape(this.body.radius, Colors.red());

    this._moveDirection = new Vector2d();
  }

  start() {
    this._getNewTarget();
  }

  update(deltaTime, elapsedTime) {

    if(this.transform.position.distance(this.target) < 10) {
      this._getNewTarget();
      this._nextTargeTtime = elapsedTime + randomFloat(1,3);
    }

    this._updateMovementDirection();
    this._handleVelocity(deltaTime);
  }

  _updateMovementDirection() {
    this._moveDirection.set(
      this.target.x - this.transform.position.x, 
      this.target.y - this.transform.position.y
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

  _getNewTarget() {
    this.target.x = randomInt(25, this.scene.width - 50);
    this.target.y = randomInt(25, this.scene.height - 50);
  }
}