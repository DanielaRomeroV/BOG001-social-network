

export function printPost(post, userPhoto) {
  const photo = newpost.querySelector('#userPhoto');
  photo.src = `${userPhoto}`;

  let newpost = document.createElement('div');
  newpost.setAttribute('class', 'card');
  newpost.innerHTML = post.comment;


  return newpost;
}
