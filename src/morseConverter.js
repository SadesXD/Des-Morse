const morseUtils = require('./morseTree.js');

module.exports = {
    /**
     * Convert from morse code into character
     */
    decode: (code) => {

        let result = "";
        let splitter = code.split(" ")
        splitter.forEach(code => {
            let lastResult = morseUtils.morseCharacter[code];
            if(!lastResult) lastResult = "?";
            result += lastResult;
        })
        return result;

    },

    /**
     * Convert from character into morse code
     */
    encode: (character) => {

        let result = "";
        character.toLowerCase().split("").forEach(char => {
            let lastResult = morseUtils.morseCode[char];
            if(!lastResult) lastResult = "?";
            result += lastResult + " ";
        })
        return result;

    }

}