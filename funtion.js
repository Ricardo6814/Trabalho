function validaLogin(user, password){
    if (user == 'admin' && password == "123") return true;
    else false;
}

module.exports = validaLogin;