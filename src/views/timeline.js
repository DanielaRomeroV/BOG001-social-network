export default () => {
  history.replaceState({}, 'timeline', '#timeline');

  const timeline = document.createElement('section');
  timeline.setAttribute('class', 'containerTimeline');
  timeline.innerHTML= `<button type="submit" class="btn login">Publicar</button>`;

//const buttonMenu = timeline.querySelector('#menu-button');
//buttonMenu.addEventListener('click', toggleMenu);*/


  return timeline;
};
