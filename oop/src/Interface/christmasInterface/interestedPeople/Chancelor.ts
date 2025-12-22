import {Notify} from "../notify";

export class Chancelor implements Notify{

    constructor(public name: string){
        this.name = name;
    }

    notify(): void {
        console.log(`Chancelor ${this.name} received a message`);
    }
}