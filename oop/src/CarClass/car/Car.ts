import { Engine } from "./Engine";
import { Wheel } from "./Wheel";

export class Car {
    private color: string = "";
    private topSpeed: number;
    private engine: Engine;
    private wheels: Wheel[];

    constructor(color: string, topSpeed: number, engine: Engine, wheels: Wheel[]) {
        this.setColor(color);
        this.topSpeed = this.ensurePositive("topSpeed", topSpeed);
        this.engine = this.ensureEngine(engine);
        this.wheels = this.ensureWheels(wheels);
    }

    public setColor(color: string) {
        this.color = this.ensureColor(color);
    }

    public getColor() {
        return this.color;
    }

    public getTopSpeed() {
        return this.topSpeed;
    }

    public getEngine() {
        return this.engine;
    }

    public getWheels() {
        return [...this.wheels];
    }

    private ensureColor(color: string) {
        if (color.trim().toLowerCase() === "black") {
            throw new Error("Black is not a valid color");
        }
        if (!color.trim()) {
            throw new Error("color cannot be empty");
        }
        return color.trim();
    }

    private ensurePositive(property: string, value: number) {
        if (value <= 0) {
            throw new Error(`${property} must be greater than 0`);
        }
        return value;
    }

    private ensureEngine(engine: Engine) {
        if (!(engine instanceof Engine)) {
            throw new Error("engine must be an Engine instance");
        }
        return engine;
    }

    private ensureWheels(wheels: Wheel[]) {
        if (!Array.isArray(wheels) || wheels.length === 0) {
            throw new Error("wheels must contain at least one wheel");
        }
        wheels.forEach((wheel, index) => {
            if (!(wheel instanceof Wheel)) {
                throw new Error(`wheels[${index}] must be a Wheel instance`);
            }
        });
        return [...wheels];
    }
}
