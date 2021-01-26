function check() {
    var curdate = new Date();
    var username = document.getElementById("username").value;
    curdate.setDate(curdate.getDate() - 7);
    var expiry_date = curdate.toUTCString();
    var final_cookie = "username= " + encodeURIComponent(username) + "; expires= " + expiry_date;
    document.cookie = final_cookie;
    alert(final_cookie);
    localStorage.setItem("username", username.toUpperCase());
}
document.getElementById("nextBtn").addEventListener("click", check, false);