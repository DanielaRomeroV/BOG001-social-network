export default () => {
  history.replaceState({}, 'timeline', '#timeline');

  const timeline = document.createElement('section');
  timeline.setAttribute('class', 'recover');

  timeline.innerHTML = `<div class="cont">
        <h2>Recupera tu contraseña</h2>
        
      </div>`;


  return timeline;
};
