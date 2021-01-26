﻿function CalcTotal() {
    var itemTotal = 0;
    var tax = 0;
    var totalWithTax = 0;
    var items = document.getElementsByTagName("input");
    var cells = document.getElementsByTagName("td");
    for (var i = 0; i < 11; i++) {
        if (items[i].checked) {
            itemTotal += (items[i].value * 1);
        }
    }
    tax = itemTotal * 0.05;
    totalWithTax = itemTotal + tax;
    cells[1].innerHTML = (itemTotal / 100).toFixed(2);
    cells[3].innerHTML = (tax / 100).toFixed(2);
    cells[5].innerHTML = "$" + (totalWithTax / 100).toFixed(2);
}

var submitButton = document.getElementById("sButton");
if (submitButton.addEventListener) {
    submitButton.addEventListener("click", CalcTotal, false);
}
else if (submitButton.attachEvent) {
    submitButton.attachEvent("onclick", CalcTotal);
}