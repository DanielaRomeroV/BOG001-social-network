import { currentUser } from '../lib/firebaseAuth.js';
import {publish} from './modal.js';
import { getAllposts} from'../lib/firebaseFirestore.js';



export default () => {

const timelineContainer = document.createElement('section');
timelineContainer.setAttribute('id', 'timelineBody');

const newBtn = document.createElement('button');
newBtn.setAttribute('class', 'btn');
newBtn.type = 'submit';
newBtn.textContent = 'NUEVA PUBLICACIÓN';


const publications = document.createElement('section');
publications.setAttribute('class', 'publicationsUsers');
publications.innerHTML = `<div class="publicationsUsers">
</div>`;


let publicacion = [];
console.log('va a getAllPsots');
publicacion = getAllposts();
console.log('sale a getAllPsots');
console.log(publicacion);






timelineContainer.appendChild(newBtn);
timelineContainer.appendChild(publications);


let user = currentUser();
const modal = timelineContainer.appendChild(publish(user.photoURL, user.uid));
newBtn.addEventListener('click', () => {
modal.style.display = "flex";
});  


 
  return timelineContainer;
};



