// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import home from './views/home.js';
import login from './views/login.js';
import createAccount from './views/createAccount.js';
import recover from './views/recover.js';
import thankAccount from './views/thankAccount.js';
import timeline from './views/timeline.js'

const body = document.getElementById('root');

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
  } else {
    // User is signed out.
    console.log('No Logueado');
    window.location.hash = '#home';
  }
});

const router = (rute) => {
  body.innerHTML = '';
  switch (rute) {
    case '#home':
      return body.appendChild(home());
    case '#login':
      return body.appendChild(login());
    case '#createAccount':
      return body.appendChild(createAccount());
    case '#recover':
      return body.appendChild(recover());
    case '#thankAccount':
      return body.appendChild(thankAccount());
    case '#timeline':
      return body.appendChild(timeline());
      break;
    default:
  }
};

header.style.display = 'none';

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});

myFunction();