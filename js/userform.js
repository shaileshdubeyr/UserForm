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
const emailerror = Document.querySelector('.email-error')
email.addEventListener('input', function () {
    let regex = RegExp('^[a-zA-Z0-9+_.-]+[@]{1}[a-zA-Z0-9]+[.a-z]{4}([.a-zA-Z]{3})*$');
    if (regex.test(email.value))
        emailerror.textContent = "";
    else
        emailerror.textContent = "Wrong email input";

});