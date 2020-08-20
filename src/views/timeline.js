export default () => {
  history.replaceState({}, 'timeline', '#timeline');

  const header = document.querySelector('#header')
  header.setAttribute('class', 'headerTimeline');
  header.innerHTML = `<div class="logo"> <img src="img/icon.png"  class="logo"/> <img src="img/menu.png"  class="menu"/>
</div>`;

  const timeline = document.createElement('section');
  timeline.setAttribute('class', 'containerTimeline');
  timeline.innerHTML = `<div class="menu" id="menu-button">  <img src="img/menu.png"  class="menu"/> </div>
  <ul class="main-menu">
            <li class="menu-item"> <a href="">Perfil</a></li>
            <li class="menu-item"> <a href="">Peliculas</a></li>
            <li class="menu-item"> <a href="">Series</a></li>
            <li class="menu-item"> <a href="">Cerrar sesión</a></li>
        </ul>`;

//const buttonMenu = timeline.querySelector('#menu-button');
//buttonMenu.addEventListener('click', toggleMenu);


  return timeline;
};
