let email = document.getElementById('email');
let password = document.getElementById('password');
let btnLogin = document.getElementById('btn-login');

function validarLogin(){
  if(email.value === 'tryber@teste.com' && password.value === '123456'){
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', validarLogin);