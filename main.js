var loginElement = document.querySelector('input#login');
var passwordElement = document.querySelector('input#password');
var buttonLoginElement = document.querySelector('button#login');
var buttonRegisterElement = document.querySelector('button#register');

var listUsers = JSON.parse(localStorage.getItem('list_users')) || [];
var user = {};
buttonRegisterElement.onclick = Register;
buttonLoginElement.onclick = Login;

function Register(){
        var login = loginElement.value;
        var password = passwordElement.value;
        
        if(listUsers.length === 0){
            if(loginElement.value !== "" && passwordElement.value !== ""){
                user = {name: login, password: password};
                listUsers.push(user);
                saveToStorage();
                console.log(listUsers);
            }
        }else if(loginElement.value !== "" && passwordElement.value !== "") {
            if(listUsers.find(item => item.name === loginElement.value)){
                console.log('Usuário já existe!');
            }else{
                user = {name: login, password: password};
                listUsers.push(user);
                saveToStorage();
                console.log(listUsers);
            }
        }else {
            console.log('Login ou senha inválida!');
        }
}
 
function Login(){
    if(listUsers.length === 0){
        console.log('Nenhum usuário cadastrado');
    }else{
        if(listUsers.find(user => loginElement.value === user.name && passwordElement.value === user.password)){
            console.log('Logado com sucesso!');
        }else{
            console.log('Usuário ou senha incorretos!');
        }
    }
}

function saveToStorage(){
    localStorage.setItem('list_users', JSON.stringify(listUsers));
}