"use strict";
let guestArr = ["yusra", "ahsen", "imran", "hasnain"];
let canNotAttend = "ahsen";
let newGuest = "amna";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// guestArr.map((item) => (
// console.log(`Dear ${item},I found a bigger diner table`)
// ));
let guestBegin = "Asna";
guestArr.unshift(guestBegin);
// console.log(guestArr);
let middleGuest = "Moattar";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
// console.log(guestArr)
guestArr.push("fatima");
console.log(guestArr);
guestArr.map((item) => (console.log(`Dear ${item},you are codinally invited to a dinner`)));
