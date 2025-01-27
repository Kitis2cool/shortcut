document.addEventListener("keydown", function (e) {
    if (e.key == "~" && e.ctrlKey) {
        var t = window.open("about:blank", "_blank", "width=800,height=500");
        
        // Ensure the new window has a blank document
        var iframe = t.document.createElement("iframe");
        iframe.src = "https://raw.githubusercontent.com/uStuff/uRun/refs/heads/main/popup.html";
        iframe.style.cssText = "width:100%; height:100%; border:none;";
        
        // Append the iframe to the new window's body
        t.document.body.appendChild(iframe);
        t.document.title = "KitisP uRun Discord: .Kitis";
        
        // Listen for messages from the iframe
        t.addEventListener("message", function (e) {
            if (e.data.toString().startsWith("execute:")) {
                eval(e.data.toString().replace("execute:", ""));
                t.close();
            }
        });
    }
});
