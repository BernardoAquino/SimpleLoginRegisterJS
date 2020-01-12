var loginElement = document.querySelector('input#login');
var passwordElement = document.querySelector('input#password');
var buttonLoginElement = document.querySelector('button#login');
var buttonRegisterElement = document.querySelector('button#register');
var listUsers = JSON.parse(localStorage.getItem('list_users')) || [];
var user = {};
buttonRegisterElement.onclick = Register;
buttonLoginElement.onclick = Login;

function Register() {
  var login = loginElement.value;
  var password = passwordElement.value;
  user = {
    name: login,
    password: password
  };
  listUsers.push(user);
  saveToStorage();
  console.log(listUsers);
}

function Login() {
  if (listUsers.length === 0) {
    console.log('Nenhum usuário cadastrado');
  } else {
    listUsers.forEach(function (value) {
      if (loginElement.value === value.name && passwordElement.value === value.password) {
        console.log('Logado com sucesso!');
      } else {
        console.log('Nome ou senha incorretos!');
      }
    });
  }
}

function saveToStorage() {
  localStorage.setItem('list_users', JSON.stringify(listUsers));
}
