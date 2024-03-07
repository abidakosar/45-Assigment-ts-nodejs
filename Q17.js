"use strict";
// task 17
// initial list of guest
let guests = ["abrish", "haram"];
// information that only two person can be invited
// console.log("due to limited space,only two people can be invited for dinner")
// while (guests.length > 2) {
// const removedGuest = guests.pop()
// console.log(`sorry,${removedGuest},you're no longer invited to dinner`)
// }
// guests.forEach((guest) => {
// console.log(`dear ${guest},you are still invited to dinner.`)
// })
// removing the last two names from the list
guests.pop();
guests.pop();
// printing the final list to conform it's empty
console.log("final guest list:", guests);
