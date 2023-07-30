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





import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(e => {
    const objectToSave = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}

