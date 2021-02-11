# Des Morse

## 🔎 About
<b>Des Morse </b>is Npm package for help you to encode & decode morse code

## 📥 Installation
```
npm install des-morse
```
## 🔧 Usage
```js
const morse = require("des-morse");

let encode = morse.encode("Hello world");
console.log(encode);
// Output: -> .... . .-.. .-.. --- / .-- --- .-. .-.. -..

let decode = morse.decode(encode);
console.log(decode);

// Output: -> hello world
```

## 📚 Symbol List
```
"/" = Space
"?" = Unknown Code
"." = Dot
"-" = Dash
" " = Space
```
