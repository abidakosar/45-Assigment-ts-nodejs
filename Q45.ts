// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly




interface Car {
    manufacture:string
    model: string
    [key: string]: string
}
function createCar(manufacture: string,model: string, ...options: [string,string][]): Car {
    const car: Car = { manufacture, model}

    options.forEach(([key, value]) => {
        car[key] = value;

    })
    return car
}

const myCar = createCar('Toyoto','Camry',['color', 'blue'], ['year', '2022'])
console.log(myCar)