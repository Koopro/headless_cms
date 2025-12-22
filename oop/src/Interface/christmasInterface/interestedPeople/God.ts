import {Notify} from "../notify";

export class God implements Notify{

    constructor(public name: string){
        this.name = name;
    }

    notify(): void {
        console.log(`God ${this.name} received a message`);
    }
}