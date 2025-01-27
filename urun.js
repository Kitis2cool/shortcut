document.addEventListener("keydown", function (e) {
    if (e.key == "~" && e.ctrlKey) {
        var t = window.open("", "_blank", "width=800,height=500");
        
        // Clear any pre-existing content in the new window
        t.document.body.innerHTML = '';

        var iframe = t.document.createElement("iframe");
        iframe.src = "https://raw.githubusercontent.com/uStuff/uRun/refs/heads/main/popup.html";
        iframe.style.cssText = "width:100%; height:100%; border:none;";
        
        // Append iframe to the new window
        t.document.body.appendChild(iframe);
        t.document.title = "KitisP uRun Discord: .Kitis";

        t.addEventListener("message", function (e) {
            if (e.data.toString().startsWith("execute:")) {
                eval(e.data.toString().replace("execute:", ""));
                t.close();
            }
        });
    }
});
