import throttle from 'lodash.throttle';
const refs = {
    formElem: document.querySelector('.feedback-form')
};

refs.formElem.addEventListener('input', throttle(onFormInput, 500));
refs.formElem.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
    const key = event.target.name;
    const value = event.target.value;
    saveToLs(key, value);
}

function onFormSubmit(event) {
    event.preventDefault();
    const email = refs.formElem.elements.email.value;
    const message = refs.formElem.elements.message.value;
    const obj = {
        email,
        message,
    };
    console.log(obj);
    event.target.reset();
    localStorage.removeItem('email');
    localStorage.removeItem('message');
}

function saveToLs(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
function loadFromLs(key) {
    const data = localStorage.getItem(key);
    try {
        return JSON.parse(data)
    } catch {
        return data;  
    }
}

function onLoad() {
    const email = loadFromLs('email');
    const message = loadFromLs('message');

    refs.formElem.elements.email.value = email;
    refs.formElem.elements.message.value = message;
}

onLoad();