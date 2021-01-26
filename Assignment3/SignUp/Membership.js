var user = {}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var errorDiv = document.getElementById("emailError");
    try {
        if (emailInput.value.search("@") === -1 || emailInput.value.lastIndexOf(".") === -1) {
            throw "Please provide a valid email address";
        }
        emailInput.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";
        emailInput.value = emailInput.value.toLowerCase();

        user.email = emailInput.value;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        emailInput.style.background = "rgb(255,233,233)";
    }
}

function validateAge() {
    var ageInput = document.getElementById("age");
    var errorDiv = document.getElementById("ageError");
    try {
        if (ageInput.value === null || ageInput.value < 18) {
            throw "Age should be at at least 18yrs. old.";
        }
        ageInput.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";

        user.age = ageInput.value;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        ageInput.style.background = "rgb(255,233,233)";
    }
}

function validatePassword() {
    var pw1input = document.getElementById("pw1");
    var pw2input = document.getElementById("pw2");
    var errorDiv = document.getElementById("passwordError");
    try {
        if (pw1input.value.length < 6) {
            throw "Password must have at least 6 characters."
        } else if (pw1input.value.localeCompare(pw2input.value) !== 0) {
            throw "Password must match";
        } else if (/\W/.test(pw1input.value) === false) {
            throw "Password must contain at least one special character";
        } else if (/[A-Z]/.test(pw1input.value) === false) {
            throw "Password must contain at least one uppercase letter";
        } else if (/\d/.test(pw1input.value) === false) {
            throw "Password must contain at least one number";
        }
        pw1input.style.background = "";
        pw2input.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";
        user.password = pw1input.value;


    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        pw1input.style.background = "rgb(255,233,233)";
        pw2input.style.background = "rgb(255,233,233)";
    }
}

function validateProvince() {
    var provinceInput = document.getElementById("province");
    var errorDiv = document.getElementById("provinceError");
    try {
        if (provinceInput.value.length < 2) {
            throw "Please select a valid province";
        }
        provinceInput.style.background = "";
        errorDiv.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";

        user.province = provinceInput.value;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        provinceInput.style.background = "rgb(255,233,233)";
    }
}

function validadePCode() {
    var pCodeInput = document.getElementById("pcode");
    var errorDiv = document.getElementById("pcodeError");
    try {
        if (/[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]/.test(pCodeInput.value) === false) {
            throw "Please provide a valid Canadian Postal Code";
        }
        pCodeInput.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";

        user.pcode = pCodeInput.value;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        pCodeInput.style.background = "rgb(255,233,233)";
    }
}

function validateOtherFields() {
    var fnameInput = document.getElementById("fname");
    var lnameInput = document.getElementById("lname");
    var addressInput = document.getElementById("address");
    var cityInput = document.getElementById("city");
    var fnameError = document.getElementById("fnameError");
    var lnameError = document.getElementById("lnameError");
    var addressError = document.getElementById("addressError");
    var cityError = document.getElementById("cityError");
    var listInput = [fnameInput, lnameInput, addressInput, cityInput];
    var errorDiv = [fnameError, lnameError, addressError, cityError];
    for (var i = 0; i < listInput.length; i++) {
        try {
            if (listInput[i].value.length === 0) {
                throw "Please fill all fields";
            }
            listInput[i].style.background = "";
            errorDiv[i].style.display = "block";
            errorDiv[i].innerHTML = "";
        }
        catch (msg) {
            errorDiv[i].style.display = "block";
            errorDiv[i].innerHTML = msg;
            listInput[i].style.background = "rgb(255,233,233)";
        }
    } 
}

function createProfile() {

    // fields that need specific requirements
    var emailError = document.getElementById("emailError").innerHTML;
    var ageError = document.getElementById("ageError").innerHTML;
    var provinceError = document.getElementById("provinceError").innerHTML;
    var pcodeError = document.getElementById("pcodeError").innerHTML;
    var passwordError = document.getElementById("passwordError").innerHTML;

    //check if other fields contain null values
    var fnameInput = document.getElementById("fname");
    var lnameInput = document.getElementById("lname");
    var addressInput = document.getElementById("address");
    var cityInput = document.getElementById("city");
    var listInput = [fnameInput, lnameInput, addressInput, cityInput];
    var countEmpty = 0;
    for (var i = 0; i < listInput.length; i++) {
        if (listInput[i].value.length === 0) {
            ++countEmpty;
            break;
        }
    } 

    // condition to create new profile
    if (countEmpty == 0 && emailError == "" && ageError == "" && provinceError == "" && pcodeError == "" && passwordError == "") {
        for (var i = 0; i < listInput.length; i++) {
            user.obj = listInput[i].value;
            document.getElementById("user" + i).innerHTML = user.obj.toUpperCase();
            document.getElementById("user").style.display = "block";
            document.getElementById("Section" + i).style.display = "block";
        }

        document.getElementById("userEmail").innerHTML = user.email;
        document.getElementById("user").style.display = "block";
        document.getElementById("emailSection").style.display = "block";


        document.getElementById("userAge").innerHTML = user.age.toUpperCase();
        document.getElementById("user").style.display = "block";
        document.getElementById("ageSection").style.display = "block";

        document.getElementById("userProvince").innerHTML = user.province.toUpperCase();
        document.getElementById("user").style.display = "block";
        document.getElementById("provinceSection").style.display = "block";

        document.getElementById("userPcode").innerHTML = user.pcode.toUpperCase();
        document.getElementById("user").style.display = "block";
        document.getElementById("pcodeSection").style.display = "block";
    }

}


function reserForm() {
    var profileInfo = document.getElementsByClassName("userPro");
    document.getElementById("formUser").reset();    
    for (var i = 0; i < profileInfo.length; i++) {
        profileInfo[i].innerHTML = "";
    }
    setUpPages();
}

function setUpPages() {
    validadePCode();
    validateAge();
    validateProvince();
    validatePassword();
    validateEmail();
    validateOtherFields();
    createProfile();

}

if (window.addEventListener) {
    window.addEventListener("load", setUpPages, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPages, validateEmail);
}