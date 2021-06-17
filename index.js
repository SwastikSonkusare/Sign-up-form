let form = document.querySelector(".right-section__form");

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('password');

let firstNameError = document.getElementById('firstNameError');
let lastNameError = document.getElementById('lastNameError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');

let field1 = document.getElementById('field-1');
let field2 = document.getElementById('field-2');
let field3 = document.getElementById('field-3');
let field4 = document.getElementById('field-4');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    // let email = emailValue.value;
    // console.log(lastName.value.length)

    // if(!validateEmail(email) && firstName.value === "" && lastName.value === "" && password.value === "") {
    //     form.classList.add("error")
    // } else {       
    //     form.classList.remove("error");
    // }
    
    if(!firstName.value) {
        firstNameError.classList.toggle("visible");
        field1.classList.toggle("visible");
    }
    
    if(!lastName.value) {
        lastNameError.classList.toggle("visible");
        field2.classList.toggle("visible");
    }
    
    if(!validateEmail(email.value)) {
        emailError.classList.toggle("visible");
        field3.classList.toggle("visible");
    }
    
    if(!password.value) {
        passwordError.classList.toggle("visible");
        field4.classList.toggle("visible");
    }

    if(firstName.value && lastName.value && email.value && password.value) {
        document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank you!</h1></div>`;
    }

})


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}