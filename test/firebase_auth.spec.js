import authFirebase from '../_mocks_/firebase_mock.js';

global.auth = authFirebase();

import {signUser, recoverUser, loginUser,loginGoogle} from '../src/lib/firebase_auth.js'

describe('signUser', () => {

    it('deberia ser una función ', () => {
        expect(typeof signUser).toBe('function');
    });
    it('debería retornar un email@gmail.com, clarita123', async () => {
        const userNew = await signUser('email@gmail.com', 'clarita123');
        console.log(userNew)
        expect(userNew).toBe('nuevo usuario email@gmail.com, clarita123')
    });
});
