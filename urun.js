/// urun.js
document.addEventListener("keydown", function (e) {
	if (e.key == "~" && e.ctrlKey) {
		var t = window.open("", "_blank", "width=800,height=500");
		var e = t.document.createElement("iframe");
		(e.src = "https://raw.githubusercontent.com/uStuff/uRun/refs/heads/main/popup.html"),
			(e.style.cssText = "width:100%; height:100%; border:none;"),
			t.document.body.appendChild(e),
			t.document.title = "KitisP uRun Discord: .Kitis",
			t.addEventListener("message", function (e) {
				e.data.toString().startsWith("execute:") && (eval(e.data.toString().replace("execute:", "")), t.close());
			});
	}
});
