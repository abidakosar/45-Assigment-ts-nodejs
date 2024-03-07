// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.






// list of current users
let currentUsers: string[] = ["haram","abrish","habib","abida","sana"]

// list of new users
let newUsers: string[] = ["maria","sana","maha","ariba","abrish"]

// function to check if a username is available
function isUsernameAvailable(username: string):boolean {
    // convert both username arrays to lowercase for case-insensitive comparison
    let currentUserLowercase: string[] = currentUsers.map(user => user.toLowerCase())
    let usernameLowecase: string = username.toLowerCase()
    return !currentUserLowercase.includes(usernameLowecase)
}

// loop through new_users list and check availability of each username
newUsers.forEach(newUser => {
    if (isUsernameAvailable(newUser)){
        console.log(`the username '${newUser}' is available` )
    } else {
        console.log(`sorry,the username '${newUser}' is already taken.please choose another one`)
    }
})