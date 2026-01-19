// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import {Actor} from "./actors/Actor.js";
import {Circle} from "./actors/Circle.js";
import {Rectangle} from "./actors/Rectangle.js";

class MyGame extends Game {
  private actors: Actor[] = [];

  init(): void {
    console.log("Game started!");
    const r1 = new Rectangle(100, 100, 100, 100, "red");
    const c1 = new Circle(200, 200, 50, "blue");
    this.actors.push(r1, c1);
  }

  update(deltaTime: number): void {
    console.log("update:", deltaTime);
    for(const act of this.actors){
      act.update(deltaTime);
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    for(const act of this.actors){
      act.render(ctx);
    }
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
