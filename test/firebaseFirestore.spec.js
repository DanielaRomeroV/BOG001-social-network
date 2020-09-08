/*import MockFirebase from 'mock-cloud-firestore';
import {userInfo} from '../src/lib/firebaseFirestore.js';

const docData = {
    _collection_: {
        users: {
        _doc_: {
        R2xnPuxHGsU23naoE995KpDVMMS2:{
            name: 'Clara Liseth Escobar Sarmiento', 
            photo: 'https://lh3.googleusercontent.com/a-/AOh14Gjd2axTXkLKn9mez9759cIcJ3PRAX1M1FJNS99Z',
            biography:"Me gustan las peliculas animadas, las de Toy Story son mis favoritas",
        },
        JTSmY5bDJ3bJ0cuqQYfrFNHu5q32:{
            name: 'Catalina Olarte', 
            photo: 'https://lh3.googleusercontent.com/a-/AOh14Gjvywru7_vdHpVDIo0EawLkApR3kYnvJ9BZzJKX5g', 
            biography:'Cuéntanos algo sobre tí',
        },
        },
        },
    },
};

global.firebase = new MockFirebase (docData,{isNaiveSnapshotListenerEnabled: true });

global.data = firebase.firestore();

describe('userInfo',() =>{
    it.only('deberia retornar 2 usuarios'), async ()=>{
        const post = await userInfo();
        console.log(post)
        expect(post.length).toBe(2);
    };
});*/
import MockFirebase from 'mock-cloud-firestore';

import { userInfo, likePost, loadPost } from '../src/lib/firebaseFirestore.js';

const data = {
    __collection__: {
    users: {
        __doc__: {
        nn123: {
            biography: 'Algo sobre tí',
            name: 'Usuario Desconocido',
            photo: '..img/user.png',
        },
        nn456: {
            biography: 'Qué buena onda chico',
            name: 'Crush',
            photo: '..img/user.png',
        },
        },
    },
    post: {
        __doc__: {
        n123n: {
            category: 'movie',
            comment: 'Ayer fue el dia de rayo mcqueen pero prefiero a mate',
            date: '7 de septiembre de 2020, 9:46:19 UTC-5',
            likes: [],
            userID: 'nn123',
        },
        },
    },
    },
};

global.firebase = new MockFirebase(data, { isNaiveSnapshotListenerEnabled: true });

global.data = firebase.firestore();

describe('userInfo', () => {
    it('debería retornar 2 usuarios', async () => {
    const users = await userInfo();
    expect(users).toHaveLength(2);
    });
});

describe('likePost', () => {
    it('likes +', async () => {
    const currentUserId = 'nn123';
    const postId = 'n123n';
    const pushLike = true;
    const printPost = data => containerDOM.innerHTML = data.data();
    let containerDOM = document.createElement('div');
    const post = await likePost(currentUserId, postId, pushLike);
    await loadPost(containerDOM);
    console.log(loadPost(containerDOM, printPost));
    expect().toBe(2);
    });
});
