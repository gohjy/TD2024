//Declarations
let nickname = document.getElementById("nickname");
let realname = document.getElementById("name");
let backbut = document.getElementById("back");
let nextbut = document.getElementById("next");
let prog = document.getElementById("prog");
let guess = document.getElementById("guess");
let guessbut = document.getElementById("guess-button");
let message = document.getElementById("message");

let personinfo = [
	null,
	["Watermelon", "Richelle"],
	["Doughnut", "Emma"],
	["Fishy", "Isabelle"],
	["Avocado", "Jenevieve"],
	["Axolotl", "Jaycus"],
	["Fishball", "Yu-Yan"],
	["Onion", "Leryn"],
	["Mengzi", "Haoran"],
	["Tiger", "Nicole"],
	["Banana", "Sophie"],
	["Corn", "Lucius"],
	["Tomato", "Hugo"]
];

let current = 1;
const total = personinfo.length - 1;

//function code
function loadslide() {
	if (!personinfo[current][2]) { 
		realname.classList.remove("guessed");
	} else {
		realname.classList.add("guessed");
	}
	nickname.textContent = personinfo[current][0];
	realname.textContent = personinfo[current][1];
	prog.textContent = `${current} / ${total}`;
	message.textContent = "";
}

function prevslide() {
	if (current == 1) {
		backbut.setAttribute("disabled", "");
		return;
	}
	nextbut.removeAttribute("disabled");
	current -= 1;
	loadslide();
	if (current == 1) {
		backbut.setAttribute("disabled", "");
	}
}

function nextslide() {
	if (current == total) {
		nextbut.setAttribute("disabled", "");
		return;
	}
	backbut.removeAttribute("disabled");
	current += 1;
	loadslide();
	if (current == total) {
		nextbut.setAttribute("disabled", "");
	}
};

function guesser() {
	if (guess.value.toLowerCase() == personinfo[current][1].toLowerCase()) {
		guess.value = "";
		realname.classList.add("guessed");
		personinfo[current][2] = true;
		message.textContent = "";
	} else {
		guess.value = "";
		message.textContent = "Incorrect guess!";
	}
}
function setup() {
	for (i of personinfo) {
		if (i === null) continue;
		i.push(false);
	}
	nickname.textContent = personinfo[current][0];
	realname.textContent = personinfo[current][1];
	prog.textContent = `${current} / ${total}`;
	guessbut.addEventListener("click", guesser);
};


backbut.addEventListener("click", prevslide);
nextbut.addEventListener("click", nextslide);
setup();