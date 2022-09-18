const nameInput = document.getElementById('name'),
      zipInput = document.getElementById('zip'),
      emailInput = document.getElementById('email'),
      phoneInput = document.getElementById('phone');


nameInput.addEventListener('blur', validateName);
zipInput.addEventListener('blur', validateZip);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);

function validateName(e) {
    const name = e.target.value;
    const re = /^[a-zA-Z\s]{2,10}$/

    if(!re.test(name)){
        nameInput.classList.add('is-invalid')
    } else {
        nameInput.classList.remove('is-invalid')
    }
}
function validateZip(e) {
    const name = e.target.value;
    re = /^[0-9]{5}(\-[0-9]{4})?$/

    if(!re.test(name)){
        zipInput.classList.add('is-invalid')
    } else {
        zipInput.classList.remove('is-invalid')
    }
}
function validateEmail(e) {
    const name = e.target.value;
    re = /^([a-zA-Z0-9\_\.\-]+)@([a-zA-Z0-9\_\.\-]+)\.[A-Za-z]{2,5}$/

    if(!re.test(name)){
        emailInput.classList.add('is-invalid')
    } else {
        emailInput.classList.remove('is-invalid')
    }
}
function validatePhone(e) {
    const name = e.target.value;
    re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/

    if(!re.test(name)){
        phoneInput.classList.add('is-invalid')
    } else {
        phoneInput.classList.remove('is-invalid')
    }

}