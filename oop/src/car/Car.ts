export class Car {
    private color: string = "";
    private topSpeed: number;
    private horsePower: number;

    constructor(color: string, topSpeed: number, horsePower: number) {
        this.checkColor(color);
        this.topSpeed = topSpeed;
        this.horsePower = horsePower;
    }

    public setColor(color: string) {
        this.checkColor(color);
    }
    public getColor() {
        return this.color;
    }

    private checkColor(color: string) {
        if (color == "black"){
            throw new Error("Black is not a valid color");
        } else{
            this.color = color;
        }

    }

}