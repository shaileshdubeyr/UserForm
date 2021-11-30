const text = document.querySelector("#text");
const error = document.querySelector(".text-error");

text.addEventListener('input', function () {
    let regex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (regex.test(text.value))
        error.textContent = "";
    else
        error.textContent = "the wrong entered charater";
});

const email = document.querySelector("#email");
const emailerror = document.querySelector('.email-error')
email.addEventListener('input', function () {
    let regex = RegExp('^[a-zA-Z0-9+_.-]+[@]{1}[a-zA-Z0-9]+[.a-z]{4}([.a-zA-Z]{3})*$');
    if (regex.test(email.value))
        emailerror.textContent = "";
    else
        emailerror.textContent = "Wrong email input";

});

const number = document.querySelector("#number");
const numbererror = document.querySelector('.number-error')
number.addEventListener('input', function () {
    let regex = RegExp('^[0-9]{2}[ ][0-9]{10}$');
    if (regex.test(number.value))
        numbererror.textContent = "";
    else
        numbererror.textContent = "Wrong number input";
});
const password  = document.querySelector('#pwd');
const passworderror = document.querySelector('.password-error')
password.addEventListener('input', function () {
    let regex = RegExp('([!@#$%^&*()]?[A-Za-z0-9]+){8,}$');
    if (regex.test(password.value))
        passworderror.textContent = "";
    else
        passworderror.textContent = "Wrong password";
    });