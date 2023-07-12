// No RightClick
document.oncontextmenu = new Function("return false;")

// No Inspect
$(document).keydown(function (event) {
	if (event.keyCode == 123) { // Prevent F12
		return false;
	} else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
		return false;
	} else if (event.ctrlKey && event.shiftKey && event.keyCode == 67) { // Prevent Ctrl+Shift+C
		return false;
	} else if (event.ctrlKey && event.shiftKey && event.keyCode == 81) { // Prevent Ctrl+Shift+Q
		return false;
	} else if (event.ctrlKey && event.keyCode == 85) { // Prevent Ctrl+U
		return false;
	}
});
