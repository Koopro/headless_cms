import { Cylinder } from "./Cylinder";

export class Engine {
    private model: string = "";
    private horsePower: number;
    private cylinder: Cylinder;

    constructor(model: string, horsePower: number, cylinder: Cylinder) {
        this.setModel(model);
        this.horsePower = this.ensurePositive("horsePower", horsePower);
        this.cylinder = this.ensureCylinder(cylinder);
    }

    public setModel(model: string) {
        this.model = this.ensureNonEmpty("model", model);
    }

    public getModel() {
        return this.model;
    }

    public getHorsePower() {
        return this.horsePower;
    }

    public getCylinder() {
        return this.cylinder;
    }

    private ensureCylinder(cylinder: Cylinder) {
        if (!(cylinder instanceof Cylinder)) {
            throw new Error("cylinder must be a Cylinder instance");
        }
        return cylinder;
    }

    private ensureNonEmpty(property: string, value: string) {
        if (!value.trim()) {
            throw new Error(`${property} cannot be empty`);
        }
        return value.trim();
    }

    private ensurePositive(property: string, value: number) {
        if (value <= 0) {
            throw new Error(`${property} must be greater than 0`);
        }
        return value;
    }
}
