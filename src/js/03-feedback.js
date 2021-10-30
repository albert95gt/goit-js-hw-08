import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");

formEl.addEventListener("submit", onSubmitForm);

const STORAGE_KEY = "feedback-form-state";
const formData = {};

initForm();

formEl.addEventListener("input", throttle(onFormInput, 500));

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function initForm () {
    let savedInputs = localStorage.getItem(STORAGE_KEY);

    if(savedInputs){
        
        savedInputs = JSON.parse(savedInputs);
       
        Object.entries(savedInputs).forEach(([name, value]) => {
            formData[name] = value
            formEl[name].value = value
        })
    }
}

function onSubmitForm(event) {
    event.preventDefault();

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY)
    formEl.reset()
}





