// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.




let guestArr: string[] = ["haram","abrish","habib"];
let canNotattend: string = "abida"
let newGuest: string = "faheem"
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("sana");
let middleGuest: string = "anam";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("wasay");
// console.log(guestArr)
console.log(guestArr.length + " " +"please"+ " " + "are invited to dinner");