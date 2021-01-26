var list = document.getElementById("topnav");
var a = document.createElement("a");
var link = document.createTextNode("Location");
a.appendChild(link);
list.appendChild(a);
a.href = "../Map/Map.html";
a.className = "h";


var username = localStorage.getItem("username");
var b = document.createElement("li");
var message;
if (username != null)
    message = document.createTextNode("Hello " + username);
else
    message = document.createTextNode("Hello");
b.appendChild(message);
list.insertBefore(b, list.childNodes[0]);
b.id = "hello";
