import { Controllable } from "../controllable";

export class Heater implements Controllable {
    start(): void {
        console.log("Heater turned on.");
    }

    stop(): void {
        console.log("Heater turned off.");
    }
}
