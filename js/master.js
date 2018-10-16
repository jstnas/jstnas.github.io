// This function will adjust the max-width of the body to keep everything pixel perfect.
function KeepPixelPerfect() {
	// Get the current width of the page.
	var width = document.getElementsByTagName("html")[0].offsetWidth;

	// Get the link to the body element.
	var body = document.getElementsByTagName("Body")[0];

	// Get the width of body.
	var bodyWidth = body.offsetWidth;

	// Work out the amount of space left.
	var freeSpace = width - bodyWidth;

	// The freespace is halved and forced to be even.
	freeSpace = (freeSpace % 2 == 0) ? freeSpace : freeSpace - 1;
	// Work out the width of the margin, in pixels.
	var marginWidth = String(freeSpace / 2) + "px";

	// Set the width of the margin.
	body.style.marginLeft = marginWidth;
}