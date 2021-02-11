const morse = require("./index.js");

let encode = morse.encode("Hello world");
console.log("Encode: " + encode);

let decode = morse.decode(encode);
console.log("Decode: " + decode);