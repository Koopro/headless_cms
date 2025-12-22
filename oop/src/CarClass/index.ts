import { Car } from "./car/Car";
import { Cylinder } from "./car/Cylinder";
import { Engine } from "./car/Engine";
import { Wheel } from "./car/Wheel";

const sportCylinder = new Cylinder("aluminium", 85, 90);
const sportEngine = new Engine("V8 Turbo", 450, sportCylinder);
const sportWheels = Array.from({ length: 4 }, () => new Wheel("Michelin", 19, 9, 36));

const ecoCylinder = new Cylinder("steel", 70, 80);
const ecoEngine = new Engine("Inline-4", 145, ecoCylinder);
const ecoWheels = Array.from({ length: 4 }, () => new Wheel("Goodyear", 17, 7, 33));

const car1 = new Car("red", 320, sportEngine, sportWheels);
const car2 = new Car("blue", 210, ecoEngine, ecoWheels);

console.log(car1.getColor());
console.log(car2.getColor());

car2.setColor("silver");

console.log(car1);
console.log(car2);
