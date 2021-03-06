import { currentUser } from '../lib/firebaseAuth.js';
import { publish } from '../components/modal.js';
import { loadPost } from '../lib/firebaseFirestore.js';

export default () => {
  const user = currentUser();

  const timelineContainer = document.createElement('section');
  timelineContainer.setAttribute('class', 'containerTimeline');

  const newBtn = document.createElement('button');
  newBtn.setAttribute('class', 'btn');
  newBtn.type = 'submit';
  newBtn.textContent = 'NUEVA PUBLICACIÓN';

  const card = document.createElement('section');
  card.setAttribute('class', 'newsfeed');

  timelineContainer.appendChild(newBtn);
  timelineContainer.appendChild(card);
  const modal = timelineContainer.appendChild(publish(user.photoURL, user.uid));

  loadPost(card);


  newBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });


  return timelineContainer;
};
