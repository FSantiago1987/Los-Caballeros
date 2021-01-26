var winWidth = 800;
var winHeight = 500;
var leftPosition = (screen.width - winWidth) / 2;
var topPosition = (screen.height - winHeight) / 2;
var optionString = "width=" + winWidth + ", height=" + winHeight + ",left=" + leftPosition + ", top=" + topPosition;
var openWin = window.open("Calendar.html", "CtrlWindow", optionString);
setTimeout("openWin.close()", 5000);