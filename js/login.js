document.getElementById('login-submit').addEventListener('click', function () {

    //get user emil
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;

    //get user password
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;

    //check user email and password
    if (userEmail == 'mahfuz@gmail.com' && userPassword == 'herock') {
        window.location.href = 'banking.html'
    }
})
