/*===== LOGIN SHOW and HIDDEN =====*/
const signup = document.getElementById('sign-up'),
    signin = document.getElementById('sign-in'),
    loginin = document.getElementById('login-in'),
    loginup = document.getElementById('login-up')


signup.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginin.classList.remove('block')
    loginup.classList.remove('none')

    // Add classes
    loginin.classList.toggle('none')
    loginup.classList.toggle('block')
})

signin.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginin.classList.remove('none')
    loginup.classList.remove('block')

    // Add classes
    loginin.classList.toggle('block')
    loginup.classList.toggle('none')
})