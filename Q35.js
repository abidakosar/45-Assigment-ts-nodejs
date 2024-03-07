"use strict";
const animals = ["lino", "dog", "cat"];
console.log("animal names");
for (const animal of animals) {
    console.log(animal);
}
console.log("\nStatement about Animals:");
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
console.log("\nAny of these animals would make a great pet!");
