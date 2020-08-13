// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import home from './views/home.js';
import login from './views/login.js';
import createAccount from './views/createAccount.js';
import recover from './views/recover.js';
import thankAccount from './views/thankAccount.js';

const body = document.getElementById('root');

//Verificar si los usuarios ya estan logueados, si estan registrados o no
auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    let displayName = user.displayName;
    let email = user.email;
    let emailVerified = user.emailVerified;
    let photoURL = user.photoURL;
    let isAnonymous = user.isAnonymous;
    let uid = user.uid;
    let providerData = user.providerData;
      console.log('Logueado');
  } else {
    // User is signed out.
      console.log('No Logueado')
      window.location.hash = '#home';
  }
});

const router = (rute)=>{
  body.innerHTML = '';
  switch (rute) {
    case "#home":
      return body.appendChild(home());
    case "#login":
      return body.appendChild(login());
    case "#createAccount":
      return body.appendChild(createAccount());
    case "#recover":
      return body.appendChild(recover());
    case "#thankAccount":
      return body.appendChild(thankAccount());
      break;
    default:
  }
}

header.style.display = "none";

window.addEventListener("hashchange", ()=>{
  router(window.location.hash);
});

myFunction();