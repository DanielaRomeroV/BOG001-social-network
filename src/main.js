// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import home from './views/home.js';
import login from './views/login.js';
import createAccount from './views/createAccount.js';
import recover from './views/recover.js';
import otherThank from './views/thankAccount.js';

const body = document.getElementById('root');
body.appendChild(home());

const router = (rute)=>{
  body.innerHTML = " ";
  switch (rute) {
    case "#home":
      return body.appendChild(home());
    case "#login":
      return body.appendChild(login());
    case "#createAccount":
      return body.appendChild(createAccount());
    case "#recover":
      return body.appendChild(recover());

      break;
    default:
  }
}


header.style.display = 'none';

window.addEventListener('hashchange', ()=>{
    router(window.location.hash);
})
console.log(home);
myFunction();


  
//obtener elementos
const email = form.getElementById ('username')
const pass = form.getElementById ('password')
const btnLogin = form.getElementById ('btn')

//añadir evento login
btnLogin.addEventListener('click', e => {
//obtener email y pass

const email = username.value;
const pass = password.value;
//almacenar el valor que va a devolver la promesa

const auth = firebase.auth();

//sign in
const promise = auth.signInWithEmailAndPassword (email, pass);
promise.catch(e => console.log(e.message));
});