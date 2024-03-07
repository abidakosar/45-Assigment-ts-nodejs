"use strict";
function show_magicians(magicians) {
    console.log("magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great `);
    }
    return greatMagicians;
}
const magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
const greatMagicians = make_great([...magicianNames]);
show_magicians(magicianNames);
show_magicians(greatMagicians);
