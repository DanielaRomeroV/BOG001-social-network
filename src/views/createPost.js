import { currentUser } from '../lib/firebaseAuth.js';

export default () => {
    const card= document.createElement('section')
    card.setAttribute('class', 'newsfeed');
    card.innerHTML = `<div class="card">
        <div class="content">
        <div class="header">
          <div class="profile-pic">${userPhoto}</div>        
            <div class="detail">
            <p class="name">${currentUser().displayName}</p>
            <p class="posted">2 hours ago</p>          
          </div>   
          <div class="categories"></div>   
        </div>
        <div class="desc">
          ""
        </div></div></div>`;
        
  
    const icons = document.createElement('section')
    icons.setAttribute('class', 'input-comment');
    icons.innerHTML = `<div class="icons"><img src="img/like.png" class="likes" width="20px"/>
    <img src="img/comment.png" class="commentaries" width="20px""/></div>
    <div class="inputCommentandButton">
    <textarea class="inputComment" id="comment" cols="40" rows="2" required placeholder="Escribe tu comentario aquí"></textarea>
    <button type="submit" class="btnCommentaries">Enviar</button>
    </div>`;
  
    
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
  
    card.appendChild(icons);
    card.appendChild(comments);
    
  
   
    icons.querySelector('.commentaries').addEventListener('click', () => {
    icons.querySelector('.inputCommentandButton').style.display = "block";
    });


    return card;
  };