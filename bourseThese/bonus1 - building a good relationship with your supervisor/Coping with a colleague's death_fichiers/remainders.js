function fixBold() {
	document.getElementById("adrail").innerHTML = document.getElementById("adrail").innerHTML.replace(/<b>/, '<b></b>');
}

function init() {
	fixBold();
}

window.onload = init;