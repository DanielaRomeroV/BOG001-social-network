import { deletePost, likePost, updateFieldData } from '../lib/firebaseFirestore.js';

import { currentUser } from '../lib/firebaseAuth.js';

// Imprime el post en el timeline y en profile
export default (post, user, postid) => {
  const photoDefault = 'https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png';
  const newpost = document.createElement('div');
  newpost.setAttribute('id', postid);
  newpost.setAttribute('class', 'post');
  newpost.innerHTML = `<div class="card">
  <div class="content">
  <div class="header">
    <div class="profile-pic"><img src="${(user.photo === null ? photoDefault : user.photo)}" id="profile-pic"/></div>
      <div class="detail">
      <p class="name">${user.name}</p>
      <p class="posted">${post.date.toDate().toDateString()}</p>
    </div>
    <img class="categories">
  </div>
  <div id="post" class="desc" contenteditable="false">
  ${post.comment}
  </div>
  </div></div>`;

  // Toma el id del usuario logueado y valida y está dentro del arreglo de likes
  const userid = currentUser();
  let pushLike = post.likes.some(likes => likes === userid.uid);
  // FIN

  const categoryIcon = newpost.querySelector('.categories');
  switch (post.category) {
    case 'Movie':
      categoryIcon.src = 'img/movie.png';
      break;
    case 'Documentary':
      categoryIcon.src = 'img/documentary.png';
      break;
    case 'Serie':
      categoryIcon.src = 'img/serie.png';
      break;
  }


  const icons = document.createElement('section');
  icons.setAttribute('class', 'input-comment');
  icons.innerHTML = `<div id="icons">
    <img src="img/delete.png" id="delete" class="icons"/>
    <img src="img/edit.png" id="edit" class="icons"/>
    <img src="${pushLike ? 'img/like.png' : 'img/dislike.png'}" id="likes" class="icons"/>
    <span>${post.likes.length}</span>
    <img src="img/comment.png" class="commentaries icons"/>
    <span>0</span>
    </div>
    <button type="button" class="btn " id="saveBtn" style="display:none">GUARDAR</button>
    <div id="confirm">
      <h2>¿Estás seguro que quieres eliminar la publicación?</h2>
      <button type="submit" class="btn" id="deleteBtn">ELIMINAR</button>
    </div>
  <div class="inputCommentandButton">
    <textarea class="inputComment" id="comment" rows="2" required placeholder="Escribe tu comentario aquí"></textarea>
    <button type="submit" class="btnCommentaries">Enviar</button>
  </div>`;

  newpost.appendChild(icons);

  /* const comments = document.createElement('section');
  comments.setAttribute('class', 'newsfeed');
  comments.innerHTML = `
  <div class="comments">
      <div class="content">
        <div class="detail">
          </div>
      </div>
      <div class="desc">
      "" </div></div>`; */

  if (window.location.hash === '#timeline') {
    icons.querySelector('#delete').style.display = 'none';
    icons.querySelector('#edit').style.display = 'none';
  }

  const postId = newpost.getAttribute('id');

  window.addEventListener('click', (e) => {
    if (e.target === icons.querySelector('.commentaries')) {
      icons.querySelector('.inputCommentandButton').style.display = 'block';
      newpost.querySelector('.card').style.display = 'none';
    } else if (e.target === icons.querySelector('#delete')) {
      icons.querySelector('#confirm').style.display = 'block';
    } else if (e.target === icons.querySelector('#deleteBtn')) {
      deletePost(postId);
    } else {
      icons.querySelector('.inputCommentandButton').style.display = 'none';
      newpost.querySelector('.card').style.display = 'block';
      icons.querySelector('#confirm').style.display = 'none';
    }
  });

  // ocultar comentarios
  window.addEventListener('click', (e) => {
    if (e.target == icons.querySelector('.commentaries ')) {
      icons.querySelector('.inputCommentandButton').style.display = 'block';
      newpost.querySelector('.card', '#icons').style.display = 'none';
    } else {
      icons.querySelector('.inputCommentandButton').style.display = 'none';
      newpost.querySelector('.card').style.display = 'block';
    }
  });

  // like activo inactivo
  const btnlike = icons.querySelector('#likes');
  btnlike.addEventListener('click', () => {
    const userid = currentUser();
    likePost(userid.uid, postid, pushLike);
    if (pushLike) {
      pushLike = false;
    } else {
      pushLike = true;
    }
  });

  // Editar post

  const editPost = newpost.querySelector('#post');
  const btnEdit = icons.querySelector('#edit');
  const btnSave = icons.querySelector('#saveBtn');

  btnEdit.addEventListener('click', () => {
    editPost.contentEditable = true;
    editPost.style.backgroundColor = 'white';
    btnSave.style.display = 'block';
    console.log('editing');
  });

  btnSave.addEventListener('click', () => {
    updateFieldData('post', postId, { comment: editPost.innerHTML });
    console.log(postId, editPost.innerHTML);
    editPost.contentEditable = false;
    btnSave.style.display = 'none';
  });

  return newpost;
};
