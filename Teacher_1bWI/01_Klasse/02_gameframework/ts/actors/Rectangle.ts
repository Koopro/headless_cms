import {Actor} from "./Actor";

export class Rectangle implements Actor{
    constructor(
        private x: number,
        private y: number,
        private width: number,
        private height: number,
        private color: string
    ){}

    update(deltaTime: number){
        this.x += deltaTime * 100;
    }

    render(ctx: CanvasRenderingContext2D){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}