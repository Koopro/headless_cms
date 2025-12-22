export class Wheel {
    private brand: string = "";
    private diameter: number;
    private width: number;
    private pressure: number;

    constructor(brand: string, diameter: number, width: number, pressure: number) {
        this.setBrand(brand);
        this.diameter = this.ensurePositive("diameter", diameter);
        this.width = this.ensurePositive("width", width);
        this.pressure = this.ensurePositive("pressure", pressure);
    }

    public setBrand(brand: string) {
        this.brand = this.ensureNonEmpty("brand", brand);
    }

    public getBrand() {
        return this.brand;
    }

    public getDiameter() {
        return this.diameter;
    }

    public getWidth() {
        return this.width;
    }

    public getPressure() {
        return this.pressure;
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
