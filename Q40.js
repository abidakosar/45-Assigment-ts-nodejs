"use strict";
function makeAlbum(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = makeAlbum("Sidhu moosewala", "295");
const album2 = makeAlbum("shubh", "still rollin");
const album3 = makeAlbum("talha anjum", "karachi mera", 15);
console.log(album1);
console.log(album2);
console.log(album3);
