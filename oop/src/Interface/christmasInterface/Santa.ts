import { Notify } from "./notify";
import { Child } from "./interestedPeople/Child";
import { Chancelor } from "./interestedPeople/Chancelor";
import { God } from "./interestedPeople/God";

class Santa {
    constructor(private interestedPeople: Notify[]) {}

    addToSantasList(person: Notify): void {
        this.interestedPeople.push(person);
    }

    notifyPeopleFromSantasList(): void {
        this.interestedPeople.forEach(person => person.notify());
    }
}

const c1 = new Child("Fabian");
const g1 = new God("Zeus");
const ch1 = new Chancelor("Sebastian Kurz");

const santasController = new Santa([]);

santasController.addToSantasList(c1);
santasController.addToSantasList(g1);
santasController.addToSantasList(ch1);

santasController.notifyPeopleFromSantasList();



