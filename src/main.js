// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import otherThank from './views/thankAccount.js';
import createAccount from './views/createAccount.js';

header.style.display = 'none';
const body = window.root;

body.appendChild(otherThank());
body.appendChild(createAccount());
console.log(otherThank);
myFunction();
