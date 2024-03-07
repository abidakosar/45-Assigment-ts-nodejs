"use strict";
function show_magicians(magicians) {
    console.log("Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ["David Copperfield", "Harry Houdini", "penn Jillette", "Teller"];
show_magicians(magicianNames);
