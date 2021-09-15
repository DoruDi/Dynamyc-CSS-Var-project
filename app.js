const userId = document.querySelector('#user');
const userPassword = document.querySelector('#password');
const cancelBtn = document.querySelector('#cancel');
const loginBtn = document.querySelector('#login');
const warningDiv = document.querySelector('.warningDiv');

cancelBtn.addEventListener('click', () => {
    userId.value = '';
    userPassword.value = '';
    warningDiv.style.visibility = 'hidden';
    userId.style.backgroundColor = 'white';
    userPassword.style.backgroundColor = 'white';
    userId.style.border = '1px solid lightgrey';
    userPassword.style.border = '1px solid lightgrey';
})

loginBtn.addEventListener('click', () => {
    if(userId.value === '') {
        warningDiv.innerHTML = '<p>Please enter User ID</p>';
        warningDiv.style.visibility = 'visible';
        userId.style.backgroundColor = 'lightyellow';
        return;
    }
    if(!userPassword.value) {
        warningDiv.innerHTML = '<p>Please enter Password</p>';
        warningDiv.style.visibility = 'visible';
        userPassword.style.backgroundColor = 'lightyellow';
        return;
    }
    if(userId.value.includes(' ')) {
        warningDiv.innerHTML = '<p>User ID should not contain spaces</p>';
        warningDiv.style.visibility = 'visible';
        userId.value = '';
        userId.style.backgroundColor = 'lightyellow';
        return;
    }
    if(userPassword.value.includes(' ')) {
        warningDiv.innerHTML = '<p>Password should not contain spaces</p>';
        warningDiv.style.visibility = 'visible';
        userPassword.value = ''
        userPassword.style.backgroundColor = 'lightyellow'
        return;
    }
    if(userId.value !== 'testuser' || userPassword.value !== 'mypassword') {
        warningDiv.innerHTML = "<p>User ID or Password doesn't match</p>";
        warningDiv.style.visibility = 'visible';
    }
    else {
        warningDiv.innerHTML = "<p>Success</p>";
        warningDiv.style.visibility = 'visible';
        warningDiv.style.backgroundColor = 'green';
        document.querySelector('form').style.display = 'none'

    }

})
const userIdValue = userId.value

userId.addEventListener('input', () => {
    if(userId.value.includes(' ')) {
        userId.style.border = '2px solid red';
        userId.style.fontSize = '14px';
        userId.style.fontFamily = "Beirut";
    }else {
        userId.style.border = '1px solid lightgrey'
        userId.style.fontSize = '16px';
        userId.style.fontFamily = "Arial";
    }


})
userPassword.addEventListener('input', () => {
    if(userPassword.value.includes(' ')) {
        userPassword.style.border = '2px solid red'

    } else {
        userPassword.style.border = '1px solid lightgrey'
    }
})