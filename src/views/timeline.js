//import {  } from '../lib/firebase_firestore.js';
import { currentUser } from '../lib/firebase_auth.js';
import {publish} from './modal.js';

export default () => {
    history.replaceState({}, 'timelineWall', '#timeline');
    const timeline = document.createElement('section');
    timeline.setAttribute('id', 'timelineBody');
    timeline.innerHTML = `<button type="button" class="btn newpublish">NUEVA PUBLICACIÓN</button>`;
    let user = currentUser();
    console.log(user.photoURL);
    timeline.querySelector('.newpublish').addEventListener('click', () => {
    const modal = timeline.appendChild(publish(user.photoURL));
    modal.style.display = "flex";
    });

    const card = document.createElement('section')
    card.setAttribute('class', 'newsfeed');
    card.innerHTML = `<div class="card">
        <div class="content">
        <div class="header">
        <div class="profile-pic"></div>        
            <div class="detail">
            <p class="name">Jose Maria</p>
            <p class="posted">2 hours ago</p>          
        </div>   
        <div class="categories"></div>   
        </div>
        <div class="desc">
        "La pelicula El Origen tiene una calificación IMDb 8.8/10, pero para mi deberia ser 5/10, ¿Ustedes que opinan?
        </div></div></div>`;
      
    const icons = document.createElement('section')
    icons.setAttribute('class', 'input-comment');
    icons.innerHTML = `<div class="icons"><img src="img/like.png" class="likes" width="20px"/>
    <img src="img/comment.png" class="commentaries" width="20px" /></div>
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
        "La pelicula El Origen tiene una calificación IMDb 8.8/10, pero para mi deberia ser 5/10, ¿Ustedes que opinan?
        </div></div>`;


  
    timeline.appendChild(card);
    timeline.appendChild(icons);
    timeline.appendChild(comments);
  

    header.style.display = 'none';
    
    icons.querySelector('.commentaries').addEventListener('click', () => {
    icons.querySelector('.inputCommentandButton').style.display = "block";
    });



    return timeline;
};
