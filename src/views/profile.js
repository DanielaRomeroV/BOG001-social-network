import { currentUser } from '../lib/firebaseAuth.js';
import { currentUserPost, updateBiography, updateFieldData } from '../lib/firebaseFirestore.js';


export default () => {
  const photoDefault = 'https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png';
  // currentUser.photoURL = (currentUser.photoURL === null ? photoDefault : currentUser.photoURL);

  const profileContainer = document.createElement('div');
  profileContainer.setAttribute('id', 'profileContainer');
  const profile = document.createElement('div');
  profile.setAttribute('id', 'profile');
  profile.innerHTML = `<h2 id="profileName">Mi perfil</h2>
        <img src="${(currentUser().photoURL === null ? photoDefault : currentUser().photoURL)}" id="preview" alt="photoUser" class="photo"/>
        <div class="default-image"></div>
        <div id="editPhoto">
        <label for="archivo">
        <img src="img/editProfile.png" alt ="Click aquí para subir tu foto"> 
        </label>
        <input type="file" id="archivo" name="archivo" accept="image/*">
        </div>
        <h1 id="nameUser">${currentUser().displayName}</h1>
        <ul>
            <li id="mail">
            ${currentUser().email}
            </li>
        </ul>
        <h3>Sobre mi</h3>
        <div id="biographyid" contenteditable="false" class="biography">Escribe algo sobre ti</div>
        <button type="button" class="btnEdit" id="btnEdits"><img src="img/edit.png" alt ="Edita sobre ti" id="userEdit"></button>
        <button type="submit" class="btn update" id="btnUp" data-id="">ACTUALIZAR</button>
        <h2 id="publication">Mis publicaciones</h2>`;

  const photos = profile.querySelector('#archivo');
  const previewPhoto = profile.querySelector('#preview');
  const defaultImage = profile.querySelector('.default-image');
  const btnUpdate = profile.querySelector('#btnUp');
  const saveBtn = profile.querySelector('#btnEdits');
  const contProfile = document.getElementById('profile');

  let currentFile = '';


  photos.addEventListener('change', () => {
    currentFile = photos.files[0];
    console.log(currentFile);
    if (currentFile) {
      const reader = new FileReader();
      defaultImage.style.display = 'none';
      previewPhoto.style.display = 'block';
      reader.addEventListener('load', () => {
        previewPhoto.setAttribute('src', reader.result);
      });
      reader.readAsDataURL(currentFile);
    } else {
      defaultImage.style.display = null;
      previewPhoto.style.display = null;
      previewPhoto.setAttribute('src', '');
    }
  });

  const biography = profile.querySelector('#biographyid');
  updateBiography(currentUser().uid, biography);
  // Las promesas cuando se ejecuta then, cuando falla catch, cuando se realiza complete
  // boton actualizar
  btnUpdate.addEventListener('click', () => {
    const file = currentFile;
    // console.log(file);
    updateFieldData('users', currentUser().uid, { biography: biography.innerHTML });
    biography.value;

    if (!file) {
      console.log('No existe archivo para cambiar la imagen!');
    } else {
      const storageRef = storage.ref(`userProfileImgs/${file.name}`);
      const task = storageRef.put(file);
      task.on('state_changed', (snapshot) => {
        task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          currentUser().updateProfile({ photoURL: downloadURL });
          console.log('File available at', downloadURL);
        });
      }, (error) => {
        console.log(error);
      });
    }
  });

  saveBtn.addEventListener('click', () => {
    const bioUser = document.getElementById('biographyid');
    bioUser.contentEditable = true;
    console.log('editing');
  });


  const postProfile = document.createElement('section');
  postProfile.setAttribute('id', 'profileBody');
  currentUserPost(postProfile, currentUser());
  profileContainer.appendChild(profile);
  profileContainer.appendChild(postProfile);


  return profileContainer;
};
