import { currentUser } from '../lib/firebase_auth.js';

export default () => {
    history.replaceState({}, 'profileUser', '#profile');
    const profile = document.createElement('div');
    profile.setAttribute('id', 'profile');
    profile.innerHTML = `<img src="" id="preview" alt="photoUser" class="photo"/>
        <div class="default-image"></div>
        <h1>Clara Escobar</h1>
        <input type="file" id="archivo" name="archivo"/>
        <ul>
            <li>
            <a href="#">ing.clara.93@gmail.com</a>
            </li>
        </ul>
        <h3>Sobre mi</h3>
        <input type="text" id="biography" class="aboutMe" placeholder="Cuéntanos de ti"/>
        <section id='profileBody'>
        <div class="comment">
            <p>Aqui va un comentario</p>
            <div id="deleteIcon"></div>
            <div id="confirm">
                <h2>¿Estás seguro que quieres eliminar la publicación?</h2>
                <button type="submit" class="btn" id="deleteBtn">ELIMINAR</button>
            </div>
        </div>
        </section>`;
    
    const photos = profile.querySelector('#archivo');
    const previewPhoto = profile.querySelector('#preview');
    const defaultImage = profile.querySelector('.default-image');

    photos.addEventListener('change', () => {
        const file = photos.files[0];
        console.log(file);
        if (file) {
            const reader = new FileReader();
            defaultImage.style.display = 'none';
            previewPhoto.style.display = 'block';
            reader.addEventListener('load', () => {
            previewPhoto.setAttribute('src', reader.result);
            });
            reader.readAsDataURL(file);
        } else {
            defaultImage.style.display = null;
            previewPhoto.style.display = null;
            previewPhoto.setAttribute('src', '');
        }
    });

    let user = currentUser();

    profile.querySelector('#deleteBtn').addEventListener('submit', ()=>{
    e.preventDefault();
    });

    window.addEventListener('click', (e)=>{
    if(e.target == profile.querySelector('#deleteIcon')){
        profile.querySelector('#confirm').style.display = 'flex';
    }else{
        profile.querySelector('#confirm').style.display = 'none';
    }

    })  
    return profile;
};



