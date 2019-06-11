const signupModal = document.querySelector('.signup-form-wrapper');
const loginModal = document.querySelector('.login-form-wrapper');
const signupBtn = document.querySelector('.signup-btn');
const loginBtn = document.querySelector('.login-btn');
const signupX = document.querySelector('.signup-x');
const loginX = document.querySelector('.login-x');


signupBtn.addEventListener('click', () => {
    signupModal.classList.add('.display');
})

LoginBtn.addEventListener('click', () => {
    loginModal.classList.add('.display');
})

signupX.addEventListener('click', () => {
    signupModal.classList.remove('.display');
})
LoginX.addEventListener('click', () => {
    signupModal.classList.remove('.display');
})