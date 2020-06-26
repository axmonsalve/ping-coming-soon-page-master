const inputEmail = document.querySelector('#input-email');
const btnNotify = document.querySelector('#btn-notify');
const alertP = document.querySelector('.email-alert');

btnNotify.addEventListener('click', e => {
  e.preventDefault();
  if (validateEmail(inputEmail.value)) {
    inputEmail.value = '';
    alertP.style.display = 'none';
    inputEmail.style.borderColor = 'var(--PaleBlue)';
  } else {
    inputEmail.style.borderColor = 'var(--LightRed)';
    alertP.style.display = 'block';

  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}