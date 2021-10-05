var signInButton = document.getElementsByClassName('btn-one')[0];
var signUpButton = document.getElementsByClassName('btn-two')[0];
var username = document.getElementById('name');
var surname = document.getElementById('surname');
var bday = document.getElementById('dob');
var email = document.getElementById('email');
var emailLogin = document.getElementById('email-login');
var phoneNum = document.getElementById('phone-num');
var password = document.getElementById('password');
var passwordCheck = document.getElementById('password-confirm');
var passwordLogin = document.getElementById('password-login');
var eyeIconOne = document.getElementById('eye1');
var eyeIconTwo = document.getElementById('eye2');
var eyeIconThree = document.getElementById('eye3');
var confirm = document.getElementById('confirm');
var registerButton = document.getElementById('register-btn');
var loginButton = document.getElementById('login-btn');
var registrationForm = document.getElementById('registration-form');
var loginForm = document.getElementById('login-form');
var toggleButtons = document.getElementsByClassName('toggle-btn');
var toggleButtonSwitch = document.getElementById('btn-highlight');


function toggleForms() {
    toggleButtonSwitch.classList.toggle('btn-highligth-switch-right');
}

function changePassType(element) {
    element.type = 'password';
}

function changeDOBType() {
    bday.type = 'date';
}

function checkDOBField() {
    if (bday.value == '') {
        bday.type = 'text';
    };
}

function showErrorMsg(element, msg) {
    var field = element;
    var fieldParent = field.parentElement;
    field.classList.remove('pink-border');
    field.classList.remove('success');
    field.classList.add('error');
    var errorElement = fieldParent.getElementsByClassName('status')[0];
    field.classList.remove('form-element-focus');
    fieldParent.classList.add('form-element-wrapper-after');
    errorElement.innerHTML = msg;
}

function showSuccessMsg(element) {
    var field = element;
    var fieldParent = field.parentElement;
    field.classList.remove('pink-border');
    field.classList.remove('error');
    field.classList.add('success');
    fieldParent.classList.remove('form-element-wrapper-after');
    var errorElement = fieldParent.getElementsByClassName('status')[0];
    errorElement.innerHTML = '';
}

function checkName(username) {
    var nameTemplate = /^[a-zA-Z]+$/;
    if (username.value.length == 0) {
        showErrorMsg(username, 'This field can\'t be empty');
    } else if (nameTemplate.test(username.value)) {
        showSuccessMsg(username);
    } else {
        showErrorMsg(username, 'Name should contain only English letters (at least 2), 1 word');
    }
}

function checkSurname(surname) {
    var nameTemplate = /^[a-zA-Z]+$/;
    if (surname.value.length == 0) {
        showErrorMsg(surname, 'This field can\'t be empty');
    }
    else if (nameTemplate.test(surname.value)) {
        showSuccessMsg(surname);
    } else {
        showErrorMsg(surname, 'Name should contain only English letters (at least 2), 1 word');
    }
}

function checkBday(bday) {
    if (bday.value.length == 0) {
        showErrorMsg(bday, 'This field can\'t be empty');
    } else showSuccessMsg(bday);
}

function checkEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.length == 0) {
        showErrorMsg(email, 'This field can\'t be empty');
    } else if (regex.test(email.value)){
        showSuccessMsg(email);
    } else showErrorMsg(email, 'Please enter valid email');
}

function checkPhone(number) {
    var phoneTemplate = /^\d{10}$/;
    if (phoneTemplate.test(number.value)) {
        showSuccessMsg(number);
    } else showErrorMsg(number, 'Please enter valid phone number');
}

function checkPassword(password) {
    var passwordTemplate = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (password.value.length == 0) {
        showErrorMsg(password, 'This field can\'t be empty');
    } else if (passwordTemplate.test(password.value)) {
        showSuccessMsg(password);
    } else {
        showErrorMsg(password, 'Include 1 lowercase and 1 uppercase letter, 1 digit, 1 special character (8 char in total)');
    }
}

function checkIfEqual(password1, password2) {
    if (password1.value.length == 0 && password2.value.length == 0) {
        showErrorMsg(password2, 'Please enter matching values');
    } else if (password1.value != password2.value) {
        showErrorMsg(password2, 'Passwords do not match!');
    } else showSuccessMsg(password2);
}

function checkCheckbox(checkbox) {
    if (checkbox.checked === false) {
        showErrorMsg(checkbox, 'Please agree to the terms and conditions');
    } else showSuccessMsg(checkbox);
}


[...toggleButtons].forEach(function(btn) {
    btn.addEventListener('click', function() {
        toggleButtonSwitch.classList.toggle('btn-highligth-switch-right');
        registrationForm.classList.toggle('login-form-invisible');
        loginForm.classList.toggle('login-form-invisible');
    });
});
password.addEventListener('click', changePassType(password));
passwordCheck.addEventListener('click', changePassType(passwordCheck));
passwordLogin.addEventListener('click', changePassType(passwordLogin));
bday.addEventListener('click', changeDOBType);
bday.addEventListener('focusout', checkDOBField);
eyeIconOne.addEventListener('click', function() {
    var type = password.getAttribute('type');
    if (type === 'password') {
        type = 'text';
    } else {
        type = 'password';
    }
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});
eyeIconTwo.addEventListener('click', function () {
    var type = passwordCheck.getAttribute('type');
    if (type === 'password') {
        type = 'text';
    } else {
        type = 'password';
    }
    passwordCheck.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});
eyeIconThree.addEventListener('click', function () {
    var type = passwordLogin.getAttribute('type');
    if (type === 'password') {
        type = 'text';
    } else {
        type = 'password';
    }
    passwordLogin.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});
password.addEventListener('click', function() {
    eyeIconOne.style.display = 'inline-block';
});
passwordCheck.addEventListener('click', function() {
    eyeIconTwo.style.display = 'inline-block';
});
passwordLogin.addEventListener('click', function() {
    eyeIconThree.style.display = 'inline-block';
});
password.addEventListener('blur', function(event) {
    if (event.relatedTarget == eyeIconOne) {
        password.focus();
    } else if ((event.relatedTarget !== eyeIconOne) && (password.value == '')) {
        eyeIconOne.style.display = 'none';
    }    
});
passwordCheck.addEventListener('blur', function(event) {
    if (event.relatedTarget == eyeIconTwo) {
        passwordCheck.focus();
    } else if ((event.relatedTarget !== eyeIconTwo) && (passwordCheck.value == '')) {
        eyeIconTwo.style.display = 'none';
    }    
});
passwordLogin.addEventListener('blur', function(event) {
    if (event.relatedTarget == eyeIconThree) {
        passwordLogin.focus();
    } else if ((event.relatedTarget !== eyeIconThree) && (passwordLogin.value == '')) {
        eyeIconThree.style.display = 'none';
    }    
});
registerButton.addEventListener('click', function(event) {
    event.preventDefault();
    checkName(username);
    checkSurname(surname);
    checkBday(bday);
    checkEmail(email);
    checkPhone(phoneNum);
    checkPassword(password);
    checkIfEqual(password, passwordCheck);
    checkCheckbox(confirm);
});
loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    checkEmail(emailLogin);
    checkPassword(passwordLogin);
});