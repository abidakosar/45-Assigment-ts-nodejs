"use strict";
// list of current users
let currentUsers = ["haram", "abrish", "habib", "abida", "sana"];
// list of new users
let newUsers = ["maria", "sana", "maha", "ariba", "abrish"];
// function to check if a username is available
function isUsernameAvailable(username) {
    // convert both username arrays to lowercase for case-insensitive comparison
    let currentUserLowercase = currentUsers.map(user => user.toLowerCase());
    let usernameLowecase = username.toLowerCase();
    return !currentUserLowercase.includes(usernameLowecase);
}
// loop through new_users list and check availability of each username
newUsers.forEach(newUser => {
    if (isUsernameAvailable(newUser)) {
        console.log(`the username '${newUser}' is available`);
    }
    else {
        console.log(`sorry,the username '${newUser}' is already taken.please choose another one`);
    }
});
