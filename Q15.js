"use strict";
let guestArr = ["haram", "habib", "abida", "sana", "abrish"];
let canNotAttend = "sana";
console.log(canNotAttend + " " + "can not make it, for Dinner");
let newGuest = "haram";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);
guestArr.map((item) => console.log(`Dear ${item},You are cordinally invited to a Dinner`));
