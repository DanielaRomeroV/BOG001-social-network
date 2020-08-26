// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import home from './views/home.js';
import login from './views/login.js';
import createAccount from './views/createAccount.js';
import recover from './views/recover.js';
import thankAccount from './views/thankAccount.js';
import timeline from './views/timeline.js';
import profile from './views/profileUser.js'

const body = document.getElementById('root');
const header = document.getElementById('header');

// Verificar si los usuarios ya estan logueados, si estan registrados o no
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const photoURL = user.photoURL;
    const isAnonymous = user.isAnonymous;
    const uid = user.uid;
    const providerData = user.providerData;
    console.log('Logueado');
    window.location.hash = '#timeline';
  } else {
    // User is signed out.
    console.log('No Logueado');
    window.location.hash = '#home';
  }
});

const router = (rute) => {
  body.innerHTML = ' ';
  switch (rute) {
    case '#home':
      return body.appendChild(home());
      break;
    case '#login':
      return body.appendChild(login());
      break;
    case '#createAccount':
      return body.appendChild(createAccount());
      break;
    case '#recover':
      return body.appendChild(recover());
      break;
    case '#thankAccount':
      return body.appendChild(thankAccount());
      break;
    case '#timeline':
      return body.appendChild(timeline());
      break;
    case '#profile':
      return body.appendChild(profile());
      break;
    default:
  }
};

window.addEventListener('hashchange', () => {
  router(window.location.hash);
  if(window.location.hash == '#timeline' || window.location.hash =='#profile' ){
    header.style.display = 'block';
  }else{
    header.style.display = 'none';
  }
});


const logout = document.querySelector('#logout');
logout.addEventListener('click', () => {
  signOut();
});