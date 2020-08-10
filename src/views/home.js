export default ()=>{
  history.replaceState({},'home', '#home');
  /*console.log(window.location.hash)*/
  const home = document.createElement('section');
  home.setAttribute('class', 'home');
  home.innerHTML = `<p class="welcome"><a class="nav-link" href="#home">Bienvenido a la comunidad más grande de amantes de series y películas</a></p>`;

  home.addEventListener('click', (e)=>{
  window.location = "#login"
  })
  return home;
}

/*`<div class="home">
  <p class="welcome">Welcome to the largest community of series and movies lovers</p>
</div>`*/
