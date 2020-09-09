import MockFirebase from 'mock-cloud-firestore';
import {userInfo } from '../src/lib/firebaseFirestore.js';



const fixtureData = {
  _collection_; {
    notes: {
      _doc_ : {
        QBC0vVQZ7tfOKUoEIweAMVRp3Kd2: {
          name: 'Daniela Romero',
          photo: 'https://lh3.googleusercontent.com/a-/AOh14GgOdLv70vgHqJ2NlorbmN9HCnfPbf3T9kpQzQo_'
        },
      }
    }
  }
}

global.firebase = new mockFirebase(fixtureData);
global.data = firebase.forestore();



describe('userInfo', () => {
  it.only('deberia retornar un usuario', async ()=>{
    const post = await userInfo();
    expect(post.length.toBe(1))
  });
});
