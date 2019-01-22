const backgroundColourArray = [
	'#d44e52', '#ec8a4b', '#ffcc68', '#80ac40', '#55a894', '#523c4e', '#2a2a3a'
];

const textColourArray = [
	'#fff8c0', '#fff8c0', '#2a2a3a', '#2a2a3a', '#fff8c0', '#fff8c0', '#fff8c0'
];

function SetPageColour(index) {
	let markers = document.querySelectorAll("mark");
	let links = document.querySelectorAll("a");
	let snippets = document.querySelectorAll("div.script");
	ReplaceColour(markers, index);
	ReplaceColour(links, index);
	ReplaceColour(snippets, index);
}

function SetPageColourRandomly() {
	let markers = document.querySelectorAll("mark");
	let links = document.querySelectorAll("a");
	let snippets = document.querySelectorAll("div.script");
	ReplaceColourRandomly(markers);
	ReplaceColourRandomly(links);
	ReplaceColourRandomly(snippets);
}

function ReplaceColourRandomly(array) {
	for (let i = 0; i < array.length; i++) {
		let randomIndex = Math.floor((Math.random() * backgroundColourArray.length) + 1);

		array[i].style.backgroundColor = backgroundColourArray[randomIndex];
		array[i].style.color = textColourArray[randomIndex];
	}
}

function ReplaceColour(array, index) {
	for (let i = 0; i < array.length; i++) {
		array[i].style.backgroundColor = backgroundColourArray[index];
		array[i].style.color = textColourArray[index];
	}
}

// This function will remove all the spaces from the scripts to allow the tabs to work properly.
function RemoveSpacesFromCode() {
	let preList = document.querySelectorAll("pre");
	for (let i = 0; i < preList.length; i++) {
		let code = preList[i].innerHTML;
		code = code.split('  ').join('');
		preList[i].innerHTML = code;
	}
}

// This function will adjust the max-width of the body to keep everything pixel perfect.
function KeepPixelPerfect() {
	// Get the current width of the page.
	let width = document.getElementsByTagName("html")[0].offsetWidth;
	// Get the link to the body element.
	let body = document.getElementsByTagName("Body")[0];
	// Get the width of body.
	let bodyWidth = body.offsetWidth;
	// Work out the amount of space left.
	let freeSpace = width - bodyWidth;
	// The free space is halved and forced to be even.
	freeSpace = (freeSpace % 2 === 0) ? freeSpace : freeSpace - 1;
	// Set the width of the margin.
	body.style.marginLeft = String(freeSpace / 2) + "px";
}