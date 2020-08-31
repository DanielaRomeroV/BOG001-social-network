import { currentUser } from '../lib/firebaseAuth.js';
import {publish} from './modal.js';
//import {printPost} from './createPost.js';

export default () => {

  let user = currentUser();

  const timelineContainer = document.createElement('section');
  timelineContainer.setAttribute('class', 'containerTimeline');

  const newBtn = document.createElement('button');
  newBtn.setAttribute('class', 'btn');
  newBtn.type = 'submit';
  newBtn.textContent = 'NUEVA PUBLICACIÓN';

  const card = document.createElement('section')
  card.setAttribute('class', 'newsfeed');
 
  
  timelineContainer.appendChild(newBtn);
  timelineContainer.appendChild(card);

  const modal = timelineContainer.appendChild(publish(user.photoURL, user.uid));

  data.collectionGroup('userComments').orderBy('date').onSnapshot((querySnapshot)=>{
    querySnapshot.forEach((doc) => {
      card.appendChild(printPost(doc.data()));
    });
  });


  newBtn.addEventListener('click', () => {
    modal.style.display = "flex";
  });

  return  timelineContainer;
};

function printPost(post){
  let newpost = document.createElement('div');
  newpost.setAttribute('class', 'card');
  newpost.innerHTML = post.comment;
  newpost.innerHTML = `<div class="card">
  <div class="content">
  <div class="header">
    <div class="profile-pic"></div>        
      <div class="detail">
      <p class="name">${currentUser().displayName}</p>
      <p class="posted">${Date}</p>          
    </div>   
    <div class="categories"></div>   
  </div>
  <div class="desc">
  ${post.comment}
  </div></div></div>`;

  const icons = document.createElement('section')
    icons.setAttribute('class', 'input-comment');
    icons.innerHTML = `<div class="icons"><img src="img/like.png" class="likes" width="20px"/>
    <img src="img/comment.png" class="commentaries" width="20px""/></div>
    <div class="inputCommentandButton">
    <textarea class="inputComment" id="comment" cols="40" rows="2" required placeholder="Escribe tu comentario aquí"></textarea>
    <button type="submit" class="btnCommentaries">Enviar</button>
    </div>`;
  
    newpost.appendChild(icons);
     
  
   
    icons.querySelector('.commentaries').addEventListener('click', () => {
    icons.querySelector('.inputCommentandButton').style.display = "block";
    });

   /* window.addEventListener('click', (e)=>{

      if(e.target == newpost.querySelector('.commentaries')){
        newpost.querySelector('.inputCommentandButton').style.display = 'flex';
      }else{
        newpost.querySelector('.inputCommentandButton').style.display = 'none';
      }*/

  return newpost;
};




