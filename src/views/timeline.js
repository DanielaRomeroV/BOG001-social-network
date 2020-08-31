import { currentUser } from '../lib/firebaseAuth.js';
import {publish} from './modal.js';
//import {printPost} from './createPost.js';
import { commentPublish} from '../lib/firebaseFirestore.js';

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
  //traer coleccion del usuario
  const userName =  data.collection('users').doc(doc.data().userID).get().then((doc) => {
  //console.log(doc.data()) 
  return doc.data();
});
console.log(userName);
      card.appendChild(printPost(doc.data(), userName));
    });
  });


  newBtn.addEventListener('click', () => {
    modal.style.display = "flex";
  });

  return  timelineContainer;
};

function printPost(post, userName){
  let newpost = document.createElement('div');
  newpost.setAttribute('class', 'card');
  newpost.setAttribute('id', 'docCard');
  newpost.innerHTML = post.comment;
  newpost.innerHTML = `<div class="card">
  <div class="content">
  <div class="header">
    <div class="profile-pic"><img src="${currentUser().photoURL}" id="profile-pic"/></div>        
      <div class="detail">
      <p class="name">${userName.name}</p>
      <p class="posted">${Date.toDate}</p>          
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
     
    //commentPublish(comment, category, userID);
   
    icons.querySelector('.commentaries').addEventListener('click', () => {
    icons.querySelector('.inputCommentandButton').style.display = "block";
    });

    /*window.addEventListener('click', (e)=>{
      if(e.target == icons.querySelector('.commentaries')){
        icons.querySelector('.inputCommentandButton').style.display = 'block';
      }else{
        icons.querySelector('.inputCommentandButton').style.display = 'none';
      });*/
      
      
      return newpost;
};






