import auth from './mock';

import { signUser, loginUser, recoverPassword } from '../src/lib/firebaseAuth';

global.auth = auth()();

describe('signUser', () => {
  it('deberia ser una función ', () => {
    expect(typeof signUser).toBe('function');
});
  it('debería retornar un daniela@gmail.com, 1234', async () => {
    const userNew = await signUser('daniela@gmail.com', '1234');    
    expect(userNew).toBe('usuario nuevo daniela@gmail.com y 1234');
  });
});

describe('loginUser', () => {
  it('debería devolver daniela@gmail.com, contraseña', async () => {
    const userLogin = await loginUser('daniela@gmail.com', 'contraseña');    
    expect(userLogin).toBe('ingreso con daniela@gmail.com y contraseña');
  });
});

describe('recoverPassword', () => {
  it('debería recuperar la contraseña', async () => {
    document.createElement('div')
    const recover = await recoverPassword('daniela@gmail.com');    
    expect(recover).toBe('le enviamos un correo a daniela@gmail.com para recuperar la contraseña');
  });
});

  

