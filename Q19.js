"use strict";
let guestArr = ["haram", "abrish", "habib"];
let canNotattend = "abida";
let newGuest = "faheem";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("sana");
let middleGuest = "anam";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("wasay");
// console.log(guestArr)
console.log(guestArr.length + " " + "please" + " " + "are invited to dinner");
