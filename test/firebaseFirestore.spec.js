import MockFirebase from 'mock-cloud-firestore';
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
    it.only('deberia retornar 2 usuarios', async ()=>{
        const post = await userInfo();
        console.log(post)
        expect(post.length).toBe(2);
    });
});

