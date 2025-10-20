import { Car } from "./car/Car";

const car1 = new Car("red", 200, 100);
const car2 = new Car("blue", 200, 100);

console.log(car1.getColor())
console.log(car2.getColor())

car2.setColor("red")

console.log(car1)
console.log(car2)