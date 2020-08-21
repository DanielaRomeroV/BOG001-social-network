//import {  } from '../lib/firebase_firestore.js';

export default () => {
    history.replaceState({}, 'timelineWall', '#timeline');
    const timeline = document.createElement('header');
    timeline.setAttribute('id', 'headerWall');
    timeline.innerHTML = `<nav id="wall">
        <input type="checkbox" id="check">
        <label class="icon">
            <a class="logo-desk" href="#timeline"><img src="img/besticono.png" alt="logo" width="70px" id= "menuIcon"/></a> 
        </label>
        <label for="check" class="checkbtn" >
            <img src="img/menu.png" alt="menu" width="40px"/>
        </label>
        <ul>
            <li><a href="#profile" class="optionsWall"><img src="img/Perfil.png" alt="iconos" width="20px"/>Perfil</a></li>
            <li><a href="#movies" class="optionsWall"><img src="img/peliculas.png" alt="iconos" width="20px"/>Peliculas</a></li>
            <li><a href="#series" class="optionsWall"><img src="img/series.png" alt="iconos" width="20px"/>Series</a></li>
            <li><a href="#documentary" class="optionsWall"><img src="img/documentales.png" alt="iconos" width="20px"/>Documentales</a></li>
            <li><a class="optionsWall"><img src="img/salir.png" alt="iconos" width="20px"/>Cerrar Sesión</a></li>
        </ul>
    </nav>`;
    return timeline;
};