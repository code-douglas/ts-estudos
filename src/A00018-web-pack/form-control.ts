import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const passwordConfirm = document.querySelector(
  '.password2',
) as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  console.log('Prevent');
  hideErrorMessages(this);
  checkEmptyFields(username, email, password, passwordConfirm);
  checkEmail(email);
  checkEqualPassword(password, passwordConfirm);

  if (shouldSendForm(this)) form.submit();
});

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function checkEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode estar vazio!');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'E-mail invalido.');
}

function checkEqualPassword(
  password: HTMLInputElement,
  passwordConfirm: HTMLInputElement,
): void {
  if (password.value !== passwordConfirm.value) {
    showErrorMessage(password, 'As senhas devem ser iguais');
    showErrorMessage(passwordConfirm, 'As senhas devem ser iguais');
  }
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));

  return send;
}

showErrorMessage(username, '');
hideErrorMessages(form);
