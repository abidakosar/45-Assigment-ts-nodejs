"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Unkown") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", " Pakistan");
describe_city("New York", "USA");
describe_city("Paris");
