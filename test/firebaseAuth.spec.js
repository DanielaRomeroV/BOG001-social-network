import authMock from './test/mock';

import { signUser } from '../src/lib/firebaseAuth';

global.auth = authMock();

describe('signUser', () => {
  it('debería retornar un email@gmail.com, correo', async () => {
    const userNew = await signUser('correo@gmail.com', 'correo');
    console.log(userNew);
    expect(userNew).toBe('correo@gmail.com');
  });
});
