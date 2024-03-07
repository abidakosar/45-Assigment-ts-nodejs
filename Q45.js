"use strict";
function createCar(manufacture, model, ...options) {
    const car = { manufacture, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const myCar = createCar('Toyoto', 'Camry', ['color', 'blue'], ['year', '2022']);
console.log(myCar);
