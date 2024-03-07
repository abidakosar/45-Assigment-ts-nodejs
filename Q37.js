"use strict";
function make_shirt(size = "Large", message = "I love Typescript") {
    console.log(`T_shirt Summary: Size - ${size}, Message - "${message}"`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Typescript is awesome!");
