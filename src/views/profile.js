import { currentUser } from '../lib/firebaseAuth.js';

export default () => {

    const profile = document.createElement('div');
    profile.setAttribute('id', 'profile');
    profile.innerHTML = `<img src="" id="preview" alt="photoUser" class="photo"/>
        <div class="default-image"></div>
        <h1>${currentUser().displayName}</h1>
        <input type="file" id="archivo" name="archivo"/>
        <ul>
            <li>
            <a href="#">${currentUser().email}</a>
            </li>
        </ul>
        <h3>Sobre mi</h3>
        <input type="text" id="biography" class="aboutMe" placeholder="Cuéntanos de ti"/>`;

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
    return profile;
};

