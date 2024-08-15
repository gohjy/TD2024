//Declarations
let nickname = document.getElementById("nickname");
let realname = document.getElementById("name");
let backbut = document.getElementById("back");
let nextbut = document.getElementById("next");
let prog = document.getElementById("prog");

let personinfo = [
	null,
	["Test nickname", "Test name"],
	["Nickname2", "name2"]
];

let current = 1;
const total = personinfo.length - 1;

//function code
function prevslide() {
	if (current == 1) {
		backbut.setAttribute("disabled", "");
		return;
	}
	nextbut.removeAttribute("disabled");
	current -= 1;
	nickname.textContent = personinfo[current][0];
	realname.textContent = personinfo[current][1];
	prog.textContent = `${current} / ${total}`;
	if (current == 1) {
		backbut.setAttribute("disabled", "");
	}
};
function nextslide() {
	if (current == total) {
		nextbut.setAttribute("disabled", "");
		return;
	}
	backbut.removeAttribute("disabled");
	current += 1;
	nickname.textContent = personinfo[current][0];
	realname.textContent = personinfo[current][1];
	prog.textContent = `${current} / ${total}`;
	if (current == total) {
		nextbut.setAttribute("disabled", "");
	}
};
function setup() {
	nickname.textContent = personinfo[current][0];
	realname.textContent = personinfo[current][1];
	prog.textContent = `${current} / ${total}`;
};


backbut.addEventListener("click", prevslide);
nextbut.addEventListener("click", nextslide);
setup();