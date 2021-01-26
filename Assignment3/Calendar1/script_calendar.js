var daysofWeek = ["Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"];

var foodOrdered = ["Shredded Beef", "Shredded Chicken", "Cochinita", "Quesadillas", "Pozole", "Grilled Chicken", "Beef Fajitas", "Chicken Fajitas", "Marinated Chicken", "Fish Tacos", "Queso Dip", "Authentic Guacamole", "Pork Carnitas"];
var clientNames = ["Joe", "Peter", "Jorge", "Andrea", "Karin", "Mary", "Fabio", "Paty", "Luciana", "Luana", "Clara", "Jehn", "John", "Zico", "Paul", "Kobe", "Lebron", "Aaron", "Judith", "Will", "Kate", "Luke"]
var takeAwayOrEatIn = ["Take-away", "Eat-in"];

function addColumnHeaders() {
    var column = 0;
    const limitColumn = 8;
    while (column < limitColumn) {
        document.getElementsByTagName("th")[column].innerHTML = daysofWeek[column];
        column++;
    }
}

// function to place day of month value in first p element 
// within each table data cell that has an id 
function addCalendarDates() {
    var i = 1;
    var paragraphs = "";
    while (i <= 31) {
        var tableCell = document.getElementById("08-" + i);
        paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[0].innerHTML = i;
        i++;
    }
}

function addFoodInfo() {
    var paragraphs = "";
    for (var i = 0; i < 31; i++) {
        var date = i + 1;
        var randNum = randomNumber(foodOrdered.length);
        var tableCell = document.getElementById("08-" + date);
        var paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[1].innerHTML = foodOrdered[randNum];
    }
}

function addOrderInfo() {
    var paragraphs = "";
    for (var i = 0; i < 31; i++) {
        var date = i + 1;
        var randNum = randomNumber(takeAwayOrEatIn.length);
        var tableCell = document.getElementById("08-" + date);
        var paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[2].innerHTML = takeAwayOrEatIn[randNum];
    }
}

function addClientInfo() {
    var paragraphs = "";
    for (var i = 0; i < 31; i++) {
        var date = i + 1;
        var randNum = randomNumber(clientNames.length);
        var tableCell = document.getElementById("08-" + date);
        var paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[3].innerHTML = "(" + clientNames[randNum] + ")";
    }
}

function setUpPage() {
    addCalendarDates();
    addFoodInfo();
    addOrderInfo();
    addClientInfo();
    addColumnHeaders();
}


function randomNumber(max) {
    var number = Math.floor(Math.random() * max);
    return number;
}

// runs setUpPage() function when page loads
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}