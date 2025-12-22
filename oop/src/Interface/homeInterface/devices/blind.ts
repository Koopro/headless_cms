import { Controllable } from "../controllable";

export class Blind implements Controllable {
    start(): void {
        console.log("Blind turned on.");
    }

    stop(): void {
        console.log("Blind turned off.");
    }
}
