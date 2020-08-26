import { currentUser } from '../lib/firebaseAuth.js';
import {publish} from './modal.js';

export default () => {

const timelineContainer = document.createElement('section');
timelineContainer.setAttribute('id', 'timelineBody');

const newBtn = document.createElement('button');
newBtn.setAttribute('class', 'btn');
newBtn.type = 'submit';
newBtn.textContent = 'NUEVA PUBLICACIÓN';


const publications = document.createElement('section');
publications.setAttribute('class', 'publicationsUsers');
publications.innerHTML = `<div class="publicationsUsers"></div>`;


timelineContainer.appendChild(newBtn);
timelineContainer.appendChild(publications);


let user = currentUser();

newBtn.addEventListener('click', () => {
const modal = timelineContainer.appendChild(publish(user.photoURL, user.uid));
modal.style.display = "flex";
});   
  
  
  
  return timelineContainer;
};