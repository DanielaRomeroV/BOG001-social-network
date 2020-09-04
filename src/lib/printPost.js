import { deletePost, likePost } from './firebaseFirestore.js';
import { currentUser } from '../lib/firebaseAuth.js';

export const printPost = (post, user, postid, pushLike) => {
  let newpost = document.createElement('div');
  newpost.setAttribute('id', postid);
  newpost.setAttribute('class', 'post');
  newpost.innerHTML = post.comment;
  newpost.innerHTML = user;
  newpost.innerHTML = `<div class="card">
  <div class="content">
  <div class="header">
    <div class="profile-pic"><img src="${user.photo}" id="profile-pic"/></div>
      <div class="detail">
      <p class="name">${user.name}</p>
      <p class="posted">${post.date.toDate().toDateString()}</p>
    </div>
    <img class="categories">
  </div>
  <div class="desc">
  ${post.comment}
  </div></div></div>`;

  let categoryIcon = newpost.querySelector('.categories');
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


  const icons = document.createElement('section')
  icons.setAttribute('class', 'input-comment');
  icons.innerHTML = `<div id="icons">
    <img src="img/delete.png" id="delete" class="icons"/>
    <img src="img/edit.png" id="edit" class="icons"/>
    <img src="img/dislike.png" id="likes" class="icons"/>
    <span>${post.likes.length}</span>
    <img src="img/comment.png" class="commentaries icons"/>
    <span>0</span>
    </div>
    <div id="confirm">
      <h2>¿Estás seguro que quieres eliminar la publicación?</h2>
      <button type="submit" class="btn" id="deleteBtn">ELIMINAR</button>
    </div>
  <div class="inputCommentandButton">
    <textarea class="inputComment" id="comment" rows="2" required placeholder="Escribe tu comentario aquí"></textarea>
    <button type="submit" class="btnCommentaries">Enviar</button>
  </div>`;

  newpost.appendChild(icons);
  const comments = document.createElement('section')
  comments.setAttribute('class', 'newsfeed');
  comments.innerHTML = `
  <div class="comments">
      <div class="content">
        <div class="detail">
          </div>
      </div>
      <div class="desc">
      "" </div></div>`;

  if(window.location.hash == '#timeline'){
    icons.querySelector('#delete').style.display = 'none';
    icons.querySelector('#edit').style.display = 'none';
  }
  //newpost.appendChild(comments);
  window.addEventListener('click', (e)=>{
      if(e.target == icons.querySelector('.commentaries')){
        icons.querySelector('.inputCommentandButton').style.display = 'block';
        newpost.querySelector('.card').style.display = 'none';
      }else if (e.target == icons.querySelector('#delete')) {
        icons.querySelector('#confirm').style.display = 'block';
      } else if (e.target == icons.querySelector('#deleteBtn')) {
        let postid = newpost.getAttribute('id');
        console.log(postid);
        deletePost(postid);
      }
      else{
        icons.querySelector('.inputCommentandButton').style.display = 'none';
        newpost.querySelector('.card').style.display = 'block';
        icons.querySelector('#confirm').style.display = 'none';
      }
    });

//ocultar comentarios
window.addEventListener('click', (e) => {
  if (e.target == icons.querySelector('.commentaries ')) {
    icons.querySelector('.inputCommentandButton').style.display = 'block';
    newpost.querySelector('.card').style.display = 'none';
  } else {
    icons.querySelector('.inputCommentandButton').style.display = 'none';
    newpost.querySelector('.card').style.display = 'block';
  }
});



//like activo inactivo
const btnlike = icons.querySelector('#likes');
btnlike.addEventListener('click', ()=>{
  let userid = currentUser();
  likePost(userid.uid, postid, pushLike);
  if(pushLike){
    btnlike.setAttribute('src', 'img/dislike.png');
    pushLike=false;
  } else{
    btnlike.setAttribute('src', 'img/like.png');
    pushLike=true;
  }
});

    return newpost;
};


 