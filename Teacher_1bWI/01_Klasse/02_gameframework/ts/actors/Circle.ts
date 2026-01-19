import {Actor} from "./Actor";

export class Circle implements Actor{
    constructor(
        private x: number,
        private y: number,
        private radius: number,
        private color: string
    ){}
    update(deltaTime: number){
        this.x += deltaTime * 100;
    }
    render(ctx: CanvasRenderingContext2D){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill();
    }
}