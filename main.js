const subbtn = document.querySelector(".button");
const FormControlList = [...document.getElementsByClassName("formControl")];

removeErrors();
//Remove Errors
function removeErrors() {
    for (let i = 0; i < FormControlList.length; i++) {
        FormControlList[i].querySelector('img').classList.add('hide');
        FormControlList[i].querySelector('small').classList.add('hide');
    }
}

subbtn.addEventListener("click", subbtnfun);

function subbtnfun() {
    for (let i = 0; i < FormControlList.length; i++) {

        checkField(FormControlList[i], i);


    }
}

function validate(email) {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}
function checkIfEmpty(str) {
    console.log(str.value);
    if (str.value.trim().length === 0) {
        return true;
    }
    return false;
}
function checkField(field, i) {
    if (i != 2) {
        if (!checkIfEmpty(field.querySelector('input'))) {
            removeErrorClass(field);
        } else {
            addErrorClass(field);
        }

    } else {
        if (validate(field.querySelector('input').value)) {
            removeErrorClass(field);
        } else {
            addErrorClass(field);
        }
    }

}

function addErrorClass(field) {
    field.querySelector('small').classList.remove('hide');
    field.querySelector('img').classList.remove('hide');
    field.querySelector('small').classList.add('show');
    field.querySelector('img').classList.add('show');
    field.querySelector('input').classList.add('error');
}

function removeErrorClass(field) {
    field.querySelector('small').classList.remove('show');
    field.querySelector('img').classList.remove('show');
    field.querySelector('input').classList.remove('error');
    field.querySelector('img').classList.add('hide');
    field.querySelector('small').classList.add('hide');
}