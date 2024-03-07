"use strict";
function show_magicians(magicians) {
    console.log("magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
const magicianNames = ["David Copperfield", "Harry Houdini", "penn Jillette", "Teller"];
make_great(magicianNames);
show_magicians(magicianNames);
