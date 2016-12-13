document.getElementById("cjed").addEventListener("input", dod);
document.getElementById("cdwa").addEventListener("input", dod);

function dod() {
	var jed = parseFloat(document.getElementById("cjed").value)||0;
	var dwa = parseFloat(document.getElementById("cdwa").value)||0;
	document.getElementById("cwyn").value = jed+dwa;
}
