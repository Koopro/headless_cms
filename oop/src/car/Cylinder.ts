export class Cylinder {
    private material: string = "";
    private bore: number;
    private stroke: number;

    constructor(material: string, bore: number, stroke: number) {
        this.setMaterial(material);
        this.bore = this.ensurePositive("bore", bore);
        this.stroke = this.ensurePositive("stroke", stroke);
    }

    public setMaterial(material: string) {
        this.material = this.ensureNonEmpty("material", material);
    }

    public getMaterial() {
        return this.material;
    }

    public getBore() {
        return this.bore;
    }

    public getStroke() {
        return this.stroke;
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
