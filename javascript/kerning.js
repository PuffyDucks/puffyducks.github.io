javascript: var original = prompt("Text");
var text = "";
var randomizer = Math.floor(Math.random() * 5) + 2;
for (var i = 0; i < original.length; i++) {
	text = text + original[i];
	if (randomizer === 0) {
		if (original[i] === " " && original[i + 1] === " ") {
			if (Math.floor(Math.random() * 3) < 1) {
				text = text + " ";
				randomizer = Math.floor(Math.random() * 4) + 3;
			}
		} else {
			text = text + " ";
			randomizer = Math.floor(Math.random() * 4) + 3;
		}
	} else {
		randomizer--;
	}
}
var end = prompt(text, text);
void(0);
