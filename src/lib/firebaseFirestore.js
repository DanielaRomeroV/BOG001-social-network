//guardar colecciones de las publicaciones

export const commentPublish = (comment, category, userID) => {
  try {
    var userDocRef = data.collection('users').doc(userID);
    userDocRef.collection('userComments').doc().set({
      comment,
      category,
    });
  } catch (e) {
    console.log(e);
  }

}

//traer las colecciones de comentarios -get data

export const getAllposts = () => {
  console.log('entró a getAllPsots');
  var posts = [];
  data.collectionGroup('userComments').onSnapshot().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      console.log(doc.id, ' => ', doc.data());
      posts.push(doc.data());
    });
    console.log(posts);
    return posts;
  });
}

/*export const getAllposts = () => {
let posts = data.collectionGroup('userComments').onSnapshot(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
  }); 
  return posts;
});
}*/


