"use strict";
let employe = ["admin", "ahsan", "maham", "farzana", "abrish"];
for (let i = 0; i < employe.length; i++) {
    if (employe[i] == "admin") {
        console.log("hello admin,would you like to see a status report");
    }
    else {
        console.log(`hello ${employe[i]}`);
    }
}
