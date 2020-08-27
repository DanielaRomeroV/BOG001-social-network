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
/*
data.collectionGroup('userComments').get().then(function (querySnapshot) {
  querySnapshot.forEach(function (doc) {
      console.log(doc.id, ' => ', doc.data());
  });
});*/

export const getAllposts = () => {
  console.log('entró a getAllPsots');
  var posts = [];
  data.collectionGroup('userComments').get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      console.log(doc.id, ' => ', doc.data());
      posts.push(doc.data());
    });
    console.log(posts);
    return posts;
  });
}





