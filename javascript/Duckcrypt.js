var type = prompt("Encode or Decode? (E or D) Encode means make a message, decode means translate it to English.");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", ",", ".", "/", ">", "<", "?", "`", "~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "}", "]", "{", "[", "'", "\"", ";", ":", "\\", null];
if (type === "E" || type === "Encode" || type === "encode" || type === "e") {
    var message = prompt("Message. Only letters, numbers, and punctuation(no special characters)");
    var key = prompt("Key/Password - Max 15 letters long. Case Sentitive. Only letters, numbers, and punctuation(no special characters)");
    if (key.length < 16) {
        var splitM = message.split("");
        var splitK = key.split("");
        var keyNumber = 0;
        var encrypted = "";
        var currentNumber;
        for (var keyLetter = 0; keyLetter < splitK.length; keyLetter++) {
            for (var letterTest = 0; letterTest < letters.length; letterTest++) {
                if (splitK[keyLetter] === letters[letterTest]) {
                    keyNumber = keyNumber + letterTest + 1;
                }
            }
        }
        for (var messageLetter = 0; messageLetter < splitM.length; messageLetter++) {
            for (var mletterTest = 0; mletterTest < letters.length; mletterTest++) {
                if (splitM[messageLetter] === letters[mletterTest]) {
                    currentNumber = (mletterTest + 1) * keyNumber;
                    currentNumber += 10000000;
                    encrypted += currentNumber;
                }
            }
        }
        var dummy = prompt("Copy This(Control C)", encrypted);
    } else {
        alert("Key is too long");
    }
} else if (type === "D" || type === "Decode" || type === "decode" || type === "d") {
    var message = prompt("Message. Only letters, numbers, and punctuation(no special characters)");
    var key = prompt("Key/Password. Case Sentitive. Only letters, numbers, and punctuation(no special characters)");
    var splitM = message.split("");
    var splitK = key.split("");
    var keyNumber = 0;
    var decrypted = "";
    for (var keyLetter = 0; keyLetter < splitK.length; keyLetter++) {
        for (var letterTest = 0; letterTest < letters.length; letterTest++) {
            if (splitK[keyLetter] === letters[letterTest]) {
                keyNumber = keyNumber + letterTest + 1;
            }
        }
    }
    for (var messageLetter = 0; messageLetter < message.length / 8; messageLetter++) {
        var currentLetterNumber = 0;
        for (var msgLetterCheck = 0; msgLetterCheck < 8; msgLetterCheck++) {
            if (msgLetterCheck === 0) {} else {
                currentLetterNumber += (message[messageLetter * 8 + msgLetterCheck]) * (Math.pow(10, (7 - msgLetterCheck)));
            }
        }
        decrypted += (letters[currentLetterNumber / keyNumber - 1]);
    }
    if (true) {
        var dummy = prompt(decrypted, decrypted);
    }
} else {
    alert("Sorry, I don't understand what you said. make sure you say Encode, Decode, E or D. Maybe you made a typo.");
}
