// import throttle from 'lodash.throttle';
// const LOCAL_KEY = 'feedback-form-state';

// form = document.querySelector('.feedback-form');
// form.addEventListener('input', throttle(onInputData, 500));
// form.addEventListener('submit', onFormSubmit);

// let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
// const { email, message } = form.elements;
// reloadPage();

// function onInputData(e) {
//     dataForm = { email: email.value, message: message.value };
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
// }

// function reloadPage(e) {
//     if (dataForm) {
//         email.value = dataForm.email || '';
//         message.value = dataForm.message || '';
//     }
// }

// function onFormSubmit(e) {
//     e.preventDefault();
//     console.log({ email: email.value, message: message.value });
    
//     if (email.value === '' || message.value || ''); {
//         return alert('Please fill in all the fields!');
//     }

//     localStorage.removeItem(LOCAL_KEY);
//     e.currentTarget.reset();
//     dataForm = {};
// }



// v.2

// import throttle from 'lodash.throttle';
// const form = document.querySelector('.feedback-form');
// const email = document.querySelector('input[name="email"]');
// const message = document.querySelector('textarea[name="message"]');
// const LOCALSTORAGE_KEY = 'feedback-form-state';

// form.addEventListener('input', throttle(e => {
//     const objectToSave = { email: email.value, message: message.value };
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
//   }, 500)
// );

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   console.log({ email: email.value, message: message.value });
//   form.reset();
//   localStorage.removeItem(LOCALSTORAGE_KEY);
// });

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };

// const storageData = load(LOCALSTORAGE_KEY);
// if (storageData) {
//   email.value = storageData.email;
//   message.value = storageData.message;
// }


import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener("input", throttle(onInputChange, 500));
form.addEventListener("submit", onFormSubmit);

const STORAGE_KEY = "feedback-form-state";
const savedValue = localStorage.getItem(STORAGE_KEY);
const parsedValue = JSON.parse(savedValue);
const formData = { ...parsedValue };

getLocaleStorage();

function onInputChange(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    if (!email.value || !message.value) {
      return alert('Please fill in all the fields!');
    }
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    formData.email = '';
    formData.message = '';
}

function getLocaleStorage() {
  if (savedValue) {
    parsedValue.email === undefined ? email.value = "" : email.value = parsedValue.email;
    parsedValue.message === undefined ? message.value = "" : message.value = parsedValue.message;
      
  }
}