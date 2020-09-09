import printPost from '../components/printPost.js';

// crear publicaciones y los campos
export const commentPublish = (comment, category, userID) => {
  try {
    const userDocRef = data.collection('post').doc().set({
      comment,
      category,
      userID,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    });
  } catch (e) {
    console.log(e);
  }
};

// Cargar los posts
// onSnapshot,cambios de la colección post,trae o quita los cambios que se hagan
export const loadPost = async (containerDOM) => {
  try {
    const users = await userInfo();
    await data.collection('post').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
      containerDOM.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const postid = doc.id;
        const post = doc.data();
        const user = users.find(user => user.id === post.userID);
        containerDOM.appendChild(printPost(post, user, postid));
      });
    });
  } catch (e) {
    console.log(e);
  }
};


// User login autora del post, posts del usuario logueado
export const currentUserPost = async (containerDOM, currentUser) => {
  try {
    const user = {
      name: currentUser.displayName,
      photo: currentUser.photoURL,
    };
    await data.collection('post').where('userID', '==', currentUser.uid).orderBy('date', 'desc')
      .onSnapshot((querySnapshot) => {
        containerDOM.innerHTML = '';
        querySnapshot.forEach(async (doc) => {
          const postid = doc.id;
          const post = doc.data();
          // console.log(post);
          containerDOM.appendChild(printPost(post, user, postid));
        });
      });
  } catch (e) {
    console.log(e);
  }
};

// Borrar post
export const deletePost = async (id) => {
  try {
    await data.collection('post').doc(id).delete();
  } catch (e) {
    console.log(e);
  }
};

// Me actualiza cualquier campo de la colección, en este caso lo utilizamos para actualizar la biografia y los posts
export const updateFieldData = async (collectionName, id, field) => {
  try {
    await data.collection(collectionName).doc(id).update(field);
  } catch (error) {
    console.log(error);
  }
};

// Guarda la información de la biografia del usuario
export const updateBiography = async (id, containerBio) => {
  try {
    await data.collection('users').doc(id).onSnapshot((querySnapshot) => {
      const user = querySnapshot.data();
      containerBio.innerHTML = user.biography;
      // console.log(user);
    });
  } catch (error) {
    console.log(error);
  }
};

// coloca y quita los likes.
export async function likePost(currentUserId, postId, pushLike) {
  const postRef = data.collection('post').doc(postId);
  if (pushLike) {
    postRef.update({
      likes: firebase.firestore.FieldValue.arrayRemove(currentUserId),
    });
  } else {
    postRef.update({
      likes: firebase.firestore.FieldValue.arrayUnion(currentUserId),
    });
  }
}

// array de objetos en donde se va a guardar toda la información de cada usuario
export const userInfo = async () => {
  const users = [];
  await data.collection('users').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      users.push({
        id: doc.id, name: doc.data().name, photo: doc.data().photo, biography: doc.data().biography,
      });
    });
    // console.log(users);
  });

  return users;
};
