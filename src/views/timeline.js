export default () => {

  history.replaceState({}, 'timeline', '#timeline');
  const timeline = document.createElement('header');
  timeline.setAttribute('id', 'headerWall');
  timeline.innerHTML = `<nav id="wall">
        <input type="checkbox" id="check">
        <label class="icon">
            <a class="logo-desk" href="#login"><img src="img/icon.png" alt="logo" width="70px" id= "menuIcon"/></a> 
        </label>
        <label for="check" class="checkbtn" >
            <img src="img/menu.png" alt="menu" width="40px"/>
        </label>
        <ul><style>A {text-decoration: none;} </style>
            <li><a href="#profile" class="optionsWall"><img src="img/Perfil.png" alt="iconos" width="20px"/>Perfil</a></li>
            <li><a href="#movies" class="optionsWall"><img src="img/Movie.png" width="20px"/>Peliculas</a></li>
            <li><a href="#series" class="optionsWall"><img src="img/series.png" alt="iconos" width="20px"/>Series</a></li>
            <li><a href="#documentary" class="optionsWall"><img src="img/documentry.png"  width="20px"/>Documentales</a></li>
            <li><a href="#home" class="optionsWall"><img src="img/salir.png" alt="iconos" width="20px"/>Cerrar Sesión</a></li>
        </ul>
    </nav>`;

  const timelineContainer = document.createElement('section');
  timelineContainer.setAttribute('class', 'containerTimeline');



  const card = document.createElement('section')
  card.setAttribute('class', 'newsfeed');
  card.innerHTML = `<button type="submit" class="btnlogin">Publicar</button>
     <div class="card">
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
  <img src="img/comments.png" class="commentaries" width="20px" onclick="openInput()"/></div>
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


  
  timelineContainer.appendChild(card);
  timelineContainer.appendChild(icons);
  timelineContainer.appendChild(comments);
  timeline.appendChild(timelineContainer);

  header.style.display = 'none';



  
 
  icons.querySelector('.commentaries').addEventListener('click', () => {
  icons.querySelector('.inputCommentandButton').style.display = "block";
    openInput();
  });

 
  return timeline;
};


  