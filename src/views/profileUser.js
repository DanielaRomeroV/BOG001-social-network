export default () => {
    history.replaceState({}, 'profileUser', '#profile');
    const profile = document.createElement('div');
    profile.setAttribute('id', 'profile');
    profile.innerHTML = `<img src="img/foto.jpg" alt="photoUser" class="photo"/>
        <h1>Clara Escobar</h1>
        <ul>
            <li>
            <a href="#">ing.clara.93@gmail.com</a>
            </li>
        </ul>
        <h3>Sobre mi</h3>
        <input type="text" id="biography" class="aboutMe" placeholder="Cuéntanos de ti"/>`;
    return profile;
};