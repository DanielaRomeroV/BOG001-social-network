export default () => {
  history.replaceState({}, 'timeline', '#timeline');

  const timeline = document.createElement('section');
  timeline.setAttribute('class', 'containerTimeline');
  timeline.innerHTML= `<button type="submit" class="btnlogin">Publicar</button>`;

  return timeline;
};
