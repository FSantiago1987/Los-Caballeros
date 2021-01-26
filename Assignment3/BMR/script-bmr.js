function Alert() {
    var bmr
    var gender
    var calories = 0
    var gender = document.getElementById("gender").value
    var age = document.getElementById("ageinput").value
    var weight = document.getElementById("weight").value
    var weightMetric = document.getElementById("weightmetric").value
    var height = document.getElementById("height").value
    var heightMetric = document.getElementById("heightmetric").value

    //get pounds to kilos
    if (weightMetric == "pounds") {
        weight = weight / 2.205
    }
    var finalWeight = Number(weight).toPrecision(4)

    //get inches to cm
    if (heightMetric == "inches") {
        height = height * 2.54
    }

    var activityLevel1 = document.getElementById("activityLevel1");
    var activityLevel2 = document.getElementById("activityLevel2");
    var activityLevel3 = document.getElementById("activityLevel3");
    var activityLevel4 = document.getElementById("activityLevel4");
    var activityLevel5 = document.getElementById("activityLevel5");
    (activityLevel1.checked) ? (calories += 1.53) : (calories += 0);
    (activityLevel2.checked) ? (calories += 1.53) : (calories += 0);
    (activityLevel3.checked) ? (calories += 1.76) : (calories += 0);
    (activityLevel4.checked) ? (calories += 1.76) : (calories += 0);
    (activityLevel5.checked) ? (calories += 2.25) : (calories += 0);

    if (gender == "male") {
        bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age)
    }
    else if (gender == "female") {
        bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)
    }
    var TEE = bmr * calories
    bmr = Number(bmr).toPrecision(4)
    TEE = Number(TEE).toPrecision(4)

    if (gender != "selectGender" && age && weight && height && weightMetric != "selectMetric" && heightMetric != "selectMetric" && calories != 0) {
        alert("BMR result: " + bmr + "\r\nTotal Energy Expenditure: " + TEE)
    }
    else {
        alert("Please fill in all fields!")
    }



    //alert( age + " your height is " + height + "cm your weight is " + finalWeight + "kg // gender " + gender + " metric " + weightMetric + heightMetric)
}

//document.getElementById("button").addEventListener("click", Alert, false);