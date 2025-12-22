import {Notify} from "../notify";

export class Child implements Notify{
    constructor(public name: string){
        this.name = name;
    }

    notify(): void {
        console.log(`Child ${this.name} received a message`);
    }
}