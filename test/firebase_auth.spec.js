import authFirebase from '../_mocks_/firebase_mock.js';

import {
  signUser /*recoverUser, loginUser, loginGoogle,*/
} from '../src/lib/firebase_auth.js';

global.auth = authFirebase()();
//console.log(authFirebase);

describe('signUser', () => {
  it('deberia ser una función ', () => {
    expect(typeof signUser).toBe('function');
  });
  it('debería retornar un email@gmail.com, clarita123', async () => {
    const userNew = await signUser('email@gmail.com', 'clarita123');
    console.log(userNew);
    expect(userNew).toBe('Se creo un usuario con email@gmail.com y clarita123');
  });
});

/*describe('loginUser', () => {
  it('deberia ser una función ', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('debería acceder con email@gmail.com y clarita123', async () => {
    const userLogin = await loginUser('email@gmail.com', 'clarita123');
    console.log(userLogin);
    expect(userLogin).toBe('Loguearse con email@gmail.com,clarita123');
  });
});*/

/*describe('recoverUser', () => {
  it('deberia ser una función ', () => {
    expect(typeof recoverUser).toBe('function');
  });
  it('debería enviar un email a email@gmail.com', async () => {
    const createMessage = document.createElement('div');
    const userRecover = await recoverUser('email@gmail.com');
    console.log(userRecover,createMessage);
    expect(userRecover,createMessage).toBe('Se envio un correo de restablecer contraseña a email@gmail.com');
  });
});*/

/*describe('loginGoogle', () => {
  it('deberia ser una función ', () => {
    expect(typeof loginGoogle).toBe('function');
  });
  it('debería loguearse con ing.clara.93@gmail.com, clarita123', async () => {
    const googleLogin = await loginGoogle('ing.clara.93@gmail.com', 'clarita123');
    console.log(googleLogin);
    expect(googleLogin).toBe('Loguea con ing.clara.93@gmail.com, clarita123');
  });
});*/

