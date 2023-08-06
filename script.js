//your JS code here. If required.
let browserName = navigator.appCodeName;
let version = navigator.appVersion;
let info = document.getElementById("browser-info");
info.innerHTML = "You are using " + browserName + " version " + version;