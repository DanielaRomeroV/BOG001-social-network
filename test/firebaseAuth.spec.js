import auth from './mock';

import { signUser, loginUser } from '../src/lib/firebaseAuth';

global.auth = auth()();

describe('signUser', () => {

  it('deberia ser una función ', () => {
    expect(typeof signUser).toBe('function');
});
  it('debería retornar un daniela@gmail.com, correo', async () => {
    const userNew = await signUser('daniela@gmail.com', 'correo');    
    expect(userNew).toBe('usuario nuevo daniela@gmail.com');
  });

  it('debería devolver daniela@gmail.com, contraseña', async () => {
    const userLogin = await loginUser('daniela@gmail.com', 'contraseña');    
    expect(userLogin).toBe('ingreso con daniela@gmail.com');
  });
});
